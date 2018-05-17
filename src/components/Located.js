import React, { Component } from 'react';
import './Located.css';

class IssLocated extends Component {
  render() {
    return (
      <div className="ISS-located">
        <div className="ISS-located-title">ISS is now located at:</div>
        <div className="coordinates">
          <div className="longitude">
            longitude: {this.props.longitude},
          </div>
          <div className="latitude">
            latitude: {this.props.latitude}
          </div>
        </div>
      </div>
    );
  }
}

export default IssLocated;
