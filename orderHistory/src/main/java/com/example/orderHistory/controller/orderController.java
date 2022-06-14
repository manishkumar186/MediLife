package com.example.orderHistory.controller;

import com.example.orderHistory.entity.orderDetail;
import com.example.orderHistory.exception.ResourceNotFoundException;
import com.example.orderHistory.repository.orderRepository;
import com.example.orderHistory.service.orderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/orderDetail")
public class orderController {

    @Autowired
    orderService orderService;

    @Autowired
    orderRepository orderRepository;

    @PostMapping("/addOrder")
    public orderDetail addOrder(@RequestBody orderDetail orderDetail){
        return orderService.createOrder(orderDetail);
    }

    @GetMapping("/allOrder")
    public List<orderDetail> allOrder(){
        return orderService.allOrderDetail();
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOrderDetail(@PathVariable Integer id){
        orderDetail order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/userOrderDetail")
    public List<orderDetail> getAllProductByUsingProductName(@RequestParam String userName){
        return orderService.getOrderDetailByUserName(userName);
    }


}
