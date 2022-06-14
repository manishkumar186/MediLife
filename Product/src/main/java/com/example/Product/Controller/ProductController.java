package com.example.Product.Controller;

import com.example.Product.Entity.Product;
import com.example.Product.Exception.ResourceNotFoundException;
import com.example.Product.Repository.ProductRepository;
import com.example.Product.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository productRepository;


    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }


    @GetMapping("/{id}")
    public Optional<Product> getProduct(@PathVariable("id") Integer productId){
        return productService.getByProductId(productId);
    }


    @GetMapping("/category")
    public List<Product> getProductByCategoryName(@RequestParam String categoryName){
        return productService.getByCategoryName(categoryName);
    }

    @GetMapping("/allProduct")
    public List<Product> getAllProduct(){
        return productService.getAllProduct();
    }

    @GetMapping("/productName")
    public List<Product> getAllProductByUsingProductName(@RequestParam String productName){
        return productService.getAllProductByName(productName);
    }

    @DeleteMapping("/deleteproduct/{productId}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Integer productId){
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product does not exist with id :" + productId));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/updateproduct/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer productId, @RequestBody Product productdetails){
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + productId));

        product.setProductName(productdetails.getProductName());
        product.setProductPrice(productdetails.getProductPrice());
        product.setSalePrice(productdetails.getSalePrice());
        product.setProductPic(productdetails.getProductPic());
        product.setProductDesc(productdetails.getProductDesc());

        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }






}
