import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Datetime from './widgets/datetime.js'
import Weather from './widgets/weather.js'
import Calendar from './widgets/calendar.js'

const Main = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="col1">
        <Datetime />
        <Weather />
      </div>
      <div className="col2">
        <Calendar />
      </div>
    </div>
  );
}

export default Main;