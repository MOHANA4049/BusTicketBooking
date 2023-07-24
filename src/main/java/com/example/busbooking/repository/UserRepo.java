package com.example.busbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.busbooking.Models.userdet;

public interface UserRepo extends JpaRepository<userdet,Integer> {

}
