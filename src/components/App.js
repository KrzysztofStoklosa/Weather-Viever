import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
import "bootstrap/dist/css/bootstrap.min.css";

const APIKey = "21616adb3fd00d6404ecb4db65520d8a";

class App extends Component {
  state = {
    value: "",
    city: "",
    date: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
    display: false,
  };
  handleFormChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmitChange = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((prevState) => ({
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false,
          display: false,
        }));
      })
      .catch((error) => {
        this.setState((prevState) => ({
          err: true,
          display: false,
        }));
      });
  };
  handleResetClick = () => {
    this.setState({
      value: "",
      city: "",
      date: "",
      sunrise: "",
      sunset: "",
      temp: "",
      pressure: "",
      wind: "",
      err: false,
      display: true,
    });
  };
  render() {
    return (
      <div className="app">
        <Form
          value={this.state.value}
          change={this.handleFormChange}
          submit={this.handleSubmitChange}
          click={this.handleResetClick}
        />
        {this.state.display ? null : <Result state={this.state} />}
      </div>
    );
  }
}

export default App;
