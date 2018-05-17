import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import IssLocated from './components/Located';
import GoogleMapContainer from './components/Map';
import CuurentTime from './components/CurrentTime';
import Astronauts from './components/Astronauts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      loaded: false
    };
    this.getIssPosition = this.getIssPosition.bind(this);
  }

  componentDidMount() {
    this.getIssPosition();
    this.timerID = setInterval(
      () => this.getIssPosition(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getIssPosition() {
    axios.get('http://api.open-notify.org/iss-now.json')
      .then(response => this.setState({
        longitude: response.data.iss_position.longitude,
        latitude: response.data.iss_position.latitude,
        loaded: true
      }))
  }
  
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="located-container">
            <IssLocated longitude={this.state.longitude} latitude={this.state.latitude} />
          </div>
          <div className="map-container">
            <GoogleMapContainer loaded={this.state.loaded} longitude={this.state.longitude} latitude={this.state.latitude} />
          </div>
        </div>
        <div className="left-side-container">
          <div className="current-time-container">
            <CuurentTime />
          </div>
          <div className="people-on-iss-container">
            <Astronauts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
