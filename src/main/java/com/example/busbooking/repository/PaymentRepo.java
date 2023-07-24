package com.example.busbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.busbooking.Models.payment;

public interface PaymentRepo extends JpaRepository<payment,Integer>{

}
