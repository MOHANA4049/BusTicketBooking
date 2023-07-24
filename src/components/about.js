import React from "react";
import './about.css';
import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
function About()
{
    return(
        <>
        <Link to="/"><button className="top">BACK</button></Link>
        <div className="ab">
        <h2 style={{color:"pink"}}>Make Your Bus Booking Smoother With Busify</h2>
        <p>Imagine the thrill of feeling the wind in your hair, while looking at the changing scenes from a window-seat, in a bus. Makes you smile, doesn’t it? Bus journeys are always filled with such memorable and fun moments, which we look back at, fondly. And in our continuous endeavour to bring to our customers the best travel experiences, we now offer smarter bus booking services on our platform. Read on to know why you should make your upcoming bus ticket bookings, online on MakeMyTrip.</p>
        <br></br><hr/><br></br>
         <br></br>
         <h2 style={{color:"pink"}}>Bus Tickets Online</h2>
         <p>MakeMyTrip is India's leading player for Bus bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current bus schedule, instant fare drops, amazing discounts, instant refunds and rebook options, price, Operator reviews and many more interesting features.</p>
        <br></br><hr/></div>
        <div className="ab1">
        <h2 style={{color:"pink"}}>Advantages of booking bus tickets online on BookMybus</h2>
        <p>You can check for bus routes to your destination,compare prices with other nearby routes,choose from AC/non-AC buses as per your preference and more,all within a few minutes.You can also avail of immediate cancellation in case of a sudden change in plans,within a few seconds,and without the hassle of falling in line for counter bus ticket booking.Online bus reservation lets you have an m-Ticket.All you have to do is show your mobile screen at the counter, displaying the m-Ticket and you are sorted. Oh! And make sure to carry your government identity proof with you at all times.</p>
        <br></br><hr></hr>
        <h2 style={{color:"pink"}}>How to Book Bus Online on BookMyBus:</h2>
        <p>Booking bus tickets online is super easy and comfortable.All you have to do is follow the steps below:</p>
        <p>
Enter details of your bus journey and tap on the ‘SEARCH’ button</p>
<p>Choose your preferred bus service</p>
<p>Select your seat next</p>
<p>Enter traveller details and book tickets</p>
<br></br><hr></hr>
        </div>
        </>
    )
}
export default About;