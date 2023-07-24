package com.example.busbooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.busbooking.Models.busdata;

public interface BusRepo extends JpaRepository<busdata,Integer>{
  List<busdata>findBySourceAndDestination(String source,String destination);
}
