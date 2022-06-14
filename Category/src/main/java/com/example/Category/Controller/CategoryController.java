package com.example.Category.Controller;

import com.example.Category.Entity.Category;
import com.example.Category.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;


    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category category){
        return categoryService.createCategory(category);
    }


    @GetMapping("/allCategory")
    public List<Category> allCategory(){
        return categoryService.allCategory();
    }


}
