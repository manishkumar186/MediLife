package com.example.orderHistory.repository;

import com.example.orderHistory.entity.orderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface orderRepository extends JpaRepository<orderDetail,Integer> {
    List<orderDetail> findByUserName(String userName);
}
