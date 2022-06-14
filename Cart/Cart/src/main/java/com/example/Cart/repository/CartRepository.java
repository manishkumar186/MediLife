package com.example.Cart.repository;

import com.example.Cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {


    List<Cart> findByUserName(String userName);
}
