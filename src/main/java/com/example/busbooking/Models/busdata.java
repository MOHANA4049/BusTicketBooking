package com.example.busbooking.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class busdata {
@Id
private int busId;
private String busname;
private String source;
private String destination;
private String date;
private String arrivaltime;
private String departuretime;
private String busType;
private int busFare;
private int seatAvail;
}
