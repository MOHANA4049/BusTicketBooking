import React from "react";
import { ContactMail } from "@material-ui/icons";
import { Help } from "@material-ui/icons";
import { ContactPage } from "@mui/icons-material";
import './contact.css';
import Navbar from "./navbar";
function Contact()
{
    return(
        <>
        <Navbar/>
        <br></br>
       <div className="st">
        <h1><ContactPage/>Contact Us</h1>
        <hr></hr>
       <br></br>
        <p>BOOKMYBUS FZ-LLC,
        Office 105, Ibn Battuta Gate Offices,
        Plot no. 16 (591-0) Jabal Ali First,
        Dubai,UAE</p><br></br>
        <br></br>
        <h2><Help/>HELPLINE</h2>
        <hr></hr>
        <br></br>
        <p>HELP LINE (UAE):
        +971 600521404, +971 8000180004
        - All UAE operators (9:00 AM to 9:00 PM GST)
        0124 4859775, 0124 4859770
       - All Indian operators (9:00 AM to 9:00 PM GST)</p>
       <br></br>
       <br></br>
        <h2>HeadOffice</h2>
        <hr></hr><br></br>
        <p>Gurgaon (Head Office)
        BookMyBus India Pvt. Ltd.,
        DLF Building No. 5 Tower B
        DLF Cyber City, DLF Phase 2
        Sector 25, Gurugram, Haryana 122002, India</p>
        <br></br><br></br>
       <h2><ContactMail/>Email US</h2>
       <hr></hr><br></br>
       <p>bookmybus@online.in</p>
       </div>
       </>
    );
}
export default Contact;