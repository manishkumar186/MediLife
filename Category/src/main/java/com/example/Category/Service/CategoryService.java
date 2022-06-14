package com.example.Category.Service;

import com.example.Category.Entity.Category;
import com.example.Category.Repository.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

//    @Autowired
//    private RestTemplate restTemplate;

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }


    public List<Category> allCategory() {
        return categoryRepository.findAll();
    }
}
