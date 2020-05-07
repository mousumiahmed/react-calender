import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
export default class MyApp extends React.Component {
  state = {
    date: new Date(),
    montharr:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    console.log(this.state.date,
    this.state.date.getDate(),
    this.state.date.getMonth(),
    // this.state.date.getTime(),
    this.state.date.getFullYear(),
    this.state.date.getUTCDay(),
    this.state.montharr[this.state.date.getMonth()])
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        /> 
      </div>
    );
  }
}

