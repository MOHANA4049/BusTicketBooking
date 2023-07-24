package com.example.busbooking.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.busbooking.Models.userdet;
import com.example.busbooking.repository.UserRepo;
@RestController
public class Usercontroller {
	@Autowired
	  UserRepo repo;
	 @GetMapping
	   List<userdet> getList(){
		 return repo.findAll();
	 }
	 @PostMapping
	  public userdet create(@RequestBody userdet t) {
		 return repo.save(t);
	 }
}