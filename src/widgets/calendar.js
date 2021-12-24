import React, { Component } from 'react';
import '../styles/calendar.css';

const API_KEY = process.env.REACT_APP_API_KEY
const CALENDARS = process.env.REACT_APP_CALENDAR_IDS.split(", ")


class Cal extends Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false, calendar: [] };
  }
  
  componentDidMount() {
    CALENDARS.forEach(calendar => {
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${API_KEY}`)
        .then(res => res.json())
        .then((result) => {
          this.setState({
            loaded: true,
            calendar: [...this.state.calendar, result]
          })
        },
        )
    })
  }

  render() {
    if (this.state.loaded === false) {
      return (
        <div className="widget" id="calendar">
          <span>Loading...</span>
        </div>
      )
    } else { 
      var events = this.state.calendar.map(calendar => {
        var new_events = calendar.items.filter(item => {
          try {
            return new Date(item.start.dateTime.substring(0, 10)).toLocaleDateString() === new Date().toLocaleDateString();
          } catch (error) {
            return false;
          }
        })
        return new_events
      })
      events = events.flat().sort((a, b) => a.start.dateTime.localeCompare(b.start.dateTime));
      return (
        <div className="widget" id="calendar">
          <span id="calendar-headline">Kalender</span>
          <div id="calendar-entries">
            {events.map(item => {
              return (
                <div className="calendar-entry">
                  <span className="entry-time">{item.start.dateTime.substring(11, 16)} <br></br> {item.end.dateTime.substring(11, 16)}</span>
                  <span className="entry-summary">{item.summary}</span>
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }
}

export default Cal;