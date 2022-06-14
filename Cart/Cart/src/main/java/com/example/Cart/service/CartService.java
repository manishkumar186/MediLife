package com.example.Cart.service;

import com.example.Cart.entity.Cart;
import com.example.Cart.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);

    }

    public List<Cart> getCartDetailByUserName(String userName) {
        return cartRepository.findByUserName(userName);
    }


}
