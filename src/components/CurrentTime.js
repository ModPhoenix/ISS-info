import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
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
      <div className="current-time">
        <div className="time">
          Current UTC time:
        </div>
        <div className="date">
          {this.state.date.toUTCString()}
        </div>
      </div>
    );
  }
}

export default CurrentTime;
