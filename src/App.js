import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ReactDOM from "react-dom/client";
import { Routes, Route,Switch} from "react-router-dom";
import Registration from './components/registration';
import About from './components/about';
import Login from './components/login';
import Buses from './components/buses';
import Contact from './components/contact';
import Seat from './components/seat';
import Download from './components/download';
import Payment from './components/payment';
import { Provider } from 'react-redux';
import store from './components/store';
import Homepage from './components/homepage';
import Feedback from './components/feedback';
// import Nav from './components/nav1';
// import Home from './components/home';
function App() {
  return (
    <Provider  store={store}>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      {/* <Route path="/home" element={<Home/>}/> */}
      <Route path="/login"element={<Login/>}/>
      <Route path="/registration"element={<Registration/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/buses" element={<Buses/>}></Route>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/seat" element={<Seat/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/download" element={<Download/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      {/* <Route path="/nav1" element={<Nav/>}/> */}
    </Routes>
    </Provider>
  );
  }
export default App;
