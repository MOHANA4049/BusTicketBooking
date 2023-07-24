
package com.example.busbooking.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class userdet{
   @Id
   @GeneratedValue(strategy=GenerationType.AUTO)
   private int userId;
   private String username;
   private String email;
   private long mobile;
   private String gender;
   private String password;
}