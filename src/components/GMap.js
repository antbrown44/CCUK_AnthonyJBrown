import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper, google, DirectionsService} from 'google-maps-react';
import { GoogleMapAPI } from './config'

class GMap extends React.Component {
  constructor() {
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
 

  onMarkerClick = () => {
   // const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: new google.maps.LatLng(14.533593, 121.053128),
      destination: new google.maps.LatLng(14.550895, 121.025079),
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: [
           {
              location: new google.maps.LatLng(14.546748, 121.05455)
           },
           {
              location: new google.maps.LatLng(14.552444,121.044488)
           }
      ]
      }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
                directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
      });
  }

render() {
   return (
        <Map google={this.props.google} zoom={14} initialCenter={{
          lat: 51.511790,
          lng: -0.137669
        }} >
    
          <Marker onClick={this.onMarkerClick}
              title={'Route to Green Park Underground Station.'}
              name={'Route to Green Park Underground Station'}
              position={{lat: 51.511790, lng: -0.137669}} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
      </Map>

      )
   }
}

export default GoogleApiWrapper({
    apiKey: (GoogleMapAPI)
  })(GMap)