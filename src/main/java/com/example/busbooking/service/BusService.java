package com.example.busbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.busbooking.Models.busdata;
import com.example.busbooking.repository.BusRepo;
@Service
public class BusService {
	@Autowired
	BusRepo r5;
	public busdata getDetailId(int id) {
		return r5.findById(id).get();
	}
	public List<busdata>getbusesBySourceAndDestination(String source,String destination)
	{
		return r5.findBySourceAndDestination(source,destination);
	}
}
