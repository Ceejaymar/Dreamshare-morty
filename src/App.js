import React, { Component } from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import MeetPerson from './components/MeetPartner';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HowItWorks />
        <MeetPerson />
      </div>
    );
  }
}

export default App;
