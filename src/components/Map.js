import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

const apiKey = 'AIzaSyDIfQW8wRnNPpCNggK_VGd7SH363rPvb60';

const ISSMarker = () => <div className="pin"></div>;

class GoogleMapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 1
  };

  position = {}

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    this.position = {
      lat: this.props.latitude,
      lng: this.props.longitude,
    }
    console.log('ISS position', this.position)
    return (
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <ISSMarker
            lat={this.props.latitude}
            lng={this.props.longitude}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapContainer;
