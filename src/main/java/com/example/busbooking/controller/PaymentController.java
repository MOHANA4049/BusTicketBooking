package com.example.busbooking.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.busbooking.Models.payment;
import com.example.busbooking.repository.PaymentRepo;
@RestController
public class PaymentController {
	@Autowired
	 PaymentRepo r2;
	 @GetMapping("/getpay")
	   List<payment> getList(){
		 return r2.findAll();
	 }
	 @PostMapping("/postpay")
	  public payment create(@RequestBody payment t) {
		 return r2.save(t);
	 }
}
