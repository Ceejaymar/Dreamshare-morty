import React, { Component } from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import MeetPerson from './components/MeetPartner';
import Discover from './components/Discover';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HowItWorks />
        <MeetPerson />
        <Discover />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
