import React, { Component } from 'react';
import '../styles/weather.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, weather: [] };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=Mannheim&lang=de&cnt=1&units=metric&appid=542ffd081e67f4512b705f89d2a611b2")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          loaded: true,
          weather: result
        })
      },
      )
  }
  render() {
    if (this.state.loaded === false) {
      return (
        <div className="widget" id="weather">
          <span>Loading...</span>
        </div>
      )
    } else {
      var icon = "http://openweathermap.org/img/wn/" + this.state.weather.list[0].weather[0].icon + "@2x.png";
      return (
        <div className="widget" id="weather">
          <span id="weather_desc"><img src={icon} alt="Weather Icon"></img>{this.state.weather.list[0].weather[0].description}</span>
          <span id="temp">Temperatur: {Math.round(this.state.weather.list[0].temp.day)} °C</span>
          <span id="felt_temp">Gefühlt: {Math.round(this.state.weather.list[0].feels_like.day)} °C</span>
          {/* <span id="min_temp">Tagestief: {this.state.weather.list[0].temp.min} °C</span> */}
          {/* <span id="max_tempe">Tageshoch: {this.state.weather.list[0].temp.max} °C</span> */}
        </div>
      );
    }
  }
}

export default Weather;