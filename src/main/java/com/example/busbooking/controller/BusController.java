package com.example.busbooking.controller;
//import com.example.busbooking.service.BusService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.busbooking.Models.busdata;
import com.example.busbooking.repository.BusRepo;
import com.example.busbooking.service.BusService;
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api")
public class BusController {
	@Autowired
	  BusRepo r;
	@Autowired
	BusService ser;
	 @GetMapping("/getbus")
	   List<busdata> getList(){
		 return r.findAll();
	 }
	   @GetMapping("/getbus/{id}")
	   public busdata getDetailsById(@PathVariable int id)
	   {
	   return ser.getDetailId(id);
	   }
	 @PostMapping("/postbus")
	  public String create(@RequestBody busdata t) {
		  r.save(t);
		  return "BusDetailsPosted";
	 }
	 @GetMapping("/getbus/{source}/{destination}")
	 public List<busdata>getBusesBySourceAndDestination(@PathVariable String source,@PathVariable String destination)
	 {
		 return ser.getbusesBySourceAndDestination(source,destination);
	 }
}
