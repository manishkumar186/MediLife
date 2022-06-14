package com.example.controller;

import com.example.service.JwtService;
import com.example.entity.JwtRequest;
import com.example.entity.JwtResponse;
import com.example.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import com.cts.authorization.config.JwtTokenUtil;

@RestController
@CrossOrigin
public class JwtController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);

    }

    @PostMapping(value = "/authorize")
    public boolean authorizeTheRequest(
            @RequestHeader(value = "Authorization", required = true) String requestTokenHeader) {
        System.out.println("Inside authorize =============="+requestTokenHeader);
        String jwtToken = null;
        String userName = null;
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            System.out.println("JWT Tocken ======================="+jwtToken);
            try {
                userName = jwtUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException | ExpiredJwtException e) {
                return false;
            }
        }
        return userName != null;

    }


}
