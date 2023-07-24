package com.example.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.busbooking.Models.booking;
import com.example.busbooking.repository.BookingRepo;
@RestController
public class BookingController {
	@Autowired
	  BookingRepo r1;
	 @GetMapping("/getbook")
	   List<booking> getList(){
		 return r1.findAll();
	 }
	 @PostMapping("/postbook")
	  public booking create(@RequestBody booking t) {
		 return r1.save(t);
	 }
}
