import React, { Component } from 'react';
import '../styles/datetime.css';

class Datetime extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="widget" id="datetime">
        <span id="clock-day">{Intl.DateTimeFormat('de-DE', { weekday: 'long' }).format(this.state.date)}</span>
        <span id="clock-time">{this.state.date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
        <span id="clock-date">{this.state.date.toLocaleDateString('de-DE')}</span>
      </div>
    );
  }
}

export default Datetime;