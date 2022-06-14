package com.example.controller;

import com.example.entity.User;
import com.example.service.UserService;
import com.example.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDao userDao;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public User forAdmin(@RequestParam String userName){
        return userDao.findById(userName).get();

    }


    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public User forUser(@RequestParam String userName){
        return userDao.findById(userName).get();
    }

}
