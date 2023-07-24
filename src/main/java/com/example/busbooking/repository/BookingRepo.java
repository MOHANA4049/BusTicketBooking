package com.example.busbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.busbooking.Models.booking;

public interface BookingRepo extends JpaRepository<booking,Integer> {

}
