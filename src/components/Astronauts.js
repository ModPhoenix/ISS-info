import React, { Component } from 'react';
import axios from 'axios'
import avatar from '../img/user.svg';
import './Astronauts.css';

class Astronauts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astronauts: [],
      astronautsAmount: 0,
    };
    this.getAstronautsOnIss = this.getAstronautsOnIss.bind(this);
  }

  componentDidMount() {
    this.getAstronautsOnIss()
    this.timerID = setInterval(
      () => this.getAstronautsOnIss(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getAstronautsOnIss() {
    axios.get('http://api.open-notify.org/astros.json')
      .then(response => {
        let people = [];
        response.data.people
          .filter(item => item.craft === 'ISS')
          .map((item) => people.push(item));
        this.setState({
          astronauts: people,
          astronautsAmount: people.length,
        })
      });
  }

  render() {
    return (
      <div className="astronauts">
        <div className="astronauts-list">
          {this.state.astronauts.map((item, index) =>
            <div className="astronaut" key={index}>
              <div className="astronaut-avatar">
                <img src={avatar} alt="Scott Tingle" />
              </div>
              <div className="astronaut-full-name">
                {item.name}
              </div>
            </div>
          )}
        </div>
        <div className="astronauts-amount">
          Total amount: {this.state.astronautsAmount} people on ISS
        </div>
      </div>
    );
  }
}

export default Astronauts;
