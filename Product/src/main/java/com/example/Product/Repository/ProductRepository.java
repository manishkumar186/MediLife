package com.example.Product.Repository;

import com.example.Product.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Integer> {

    List<Product> findByCategoryName(String categoryName);

    List<Product> findByProductName(String productName);
}
