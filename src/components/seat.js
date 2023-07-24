import React from "react";
import './seat.css';
import { Link } from "react-router-dom";
import Navbar from "./navbar";
class Seat extends React.Component {
    constructor() {
      super();
      this.state = {
        seat: [
          'A0', 'A1', 'A2', 'A3', 'A4', 'A5',
          'B0', 'B1', 'B2', 'B3', 'B4', 'B5',
          'C0', 'C1', 'C2', 'C3', 'C4', 'C5',
          'D0', 'D1', 'D2', 'D3', 'D4', 'D5',
          'E0', 'E1', 'E2', 'E3', 'E4', 'E5',
          'F0', 'F1', 'F2', 'F3', 'F4', 'F5',
          'G0', 'G1', 'G2', 'G3', 
        ],
        seatAvailable: [
          'A0', 'A1', 'A2', 'A3', 'A4', 'A5',
          'B0', 'B1', 'B2', 'B3', 'B4', 'B5',
          'C0', 'C1', 'C2', 'C3', 'C4', 'C5',
          'D0', 'D1', 'D2', 'D3', 'D4', 'D5',
          'E0', 'E1', 'E2', 'E3', 'E4', 'E5',
          'F0', 'F1', 'F2', 'F3', 'F4', 'F5',
          'G0', 'G1', 'G2', 'G3',
        ],
        seatSelected: [],
        seatReserved: []
      }
    }
    onClickData(seat) {
      if (this.state.seatReserved.indexOf(seat) == -1) {
        if (this.state.seatSelected.indexOf(seat) > -1) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatSelected: this.state.seatSelected.filter(res => res != seat),
          seatReserved: this.state.seatReserved
        })
      } else {
        this.setState({
          seatSelected: this.state.seatSelected.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat),
          seatReserved: this.state.seatReserved
        })
        }
      }
    }
    onReserved() {
      let reserved = this.state.seatReserved.concat(this.state.seatSelected)
      this.setState({
        seatAvailable: this.state.seatAvailable,
        seatReserved: reserved,
        seatSelected: []
      })
    }
  
    render() {
      return (
        <div id="wel">
          <DrawGrid
            seat={this.state.seat}
            available={this.state.seatAvailable}
            selected={this.state.seatSelected}
            reserved={this.state.seatReserved}
            onClickData={this.onClickData.bind(this)}
            onReserved={this.onReserved.bind(this)}
          />
        </div>
      )
    }
  }
  
  class DrawGrid extends React.Component {
    render() {
      return (
        <>
        <Navbar/>
        <div className="container" id="wel">
          {/* <Link to="/buses"><a>BACK</a></Link> */}
          <table className="grid">
            <tbody>
              <tr>
                {this.props.seat.map(row =>
                  <td
                    className={this.props.reserved.indexOf(row) > -1 ? 'reserved' : 
                                       this.props.selected.indexOf(row) > -1 ? 'selected' : 'availablE'}
                    key={row} onClick={e => this.onClickSeat(row)}>{row} </td>)}
              </tr>
            </tbody>
          </table>
          <AvailableList available={this.props.available}/>
          
          <SelectedList selected={this.props.selected} />
          <ReservedList reserved={this.props.reserved} />
          
          <button className="b0" onClick={e => this.bookSeat()}>BOOK SEAT</button>
          <Link to="/payment"><button className="b0">MakePayment</button></Link>
        </div>
        </>
      )
    }
  
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
    
    bookSeat() {
      this.props.onReserved();
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return (
        <div className="left" id="wel">
          <h4>AVAILABLE: ({seatCount == 0 ? 'No seats available' : seatCount})</h4>
          <br></br>
          <ul>
            {this.props.available.map(res => <li key={res} >{res}</li>)}
          </ul>
        </div>
      )
    }
  }
  
  class SelectedList extends React.Component {
    render() {
      return (
        <div className="right" id="wel">
            <br></br>
          <h4>SELECTED: ({this.props.selected.length})</h4>
          <ul>
            {this.props.selected.map(res => <li key={res} >{res}</li>)}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return (
        <div className="right" id="wel">
            <br></br>
          <h4>RESERVED: ({this.props.reserved.length})</h4>
          <br></br>
          <ul>
            {this.props.reserved.map(res => <li key={res} >{res}</li>)}
          </ul>
        </div>
      )
    }
  }
export default Seat;