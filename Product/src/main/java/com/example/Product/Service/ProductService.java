package com.example.Product.Service;

import com.example.Product.Entity.Product;
import com.example.Product.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> getByProductId(Integer productId) {
        return productRepository.findById(productId);
    }


    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public List<Product> getByCategoryName(String categoryName) {
        return productRepository.findByCategoryName(categoryName);
    }

    public List<Product> getAllProductByName(String productName) {
        return productRepository.findByProductName(productName);
    }
}
