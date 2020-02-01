import React, {Component, useState} from 'react';
import MapGL, { Marker } from 'react-map-gl';
import guides from '../data/guides.json'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGJvb2JvbyIsImEiOiJjazYzYmUyeWEwNmNiM2xwZzd5NDg5ajljIn0.F5tgToY70jIZEN0jB51zJQ'; // Set your mapbox token here

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 43,
        longitude: -81.2,
        zoom: 10,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
       <div>
        <MapGL
            {...this.state.viewport}
            width="100vw"
            height="85vh"
            mapStyle="mapbox://styles/hbooboo/ck63y1z7v04rq1inwxtcewbzu"
            onViewportChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={MAPBOX_TOKEN}>
            {guides.map(guide => (
                <Marker key={guide.id} latitude={guide.latitude} longitude={guide.longitude}>
                    <div>Tour Guide</div>
                </Marker>
            ))}
            </MapGL>
        </div> 
    );
  }
}

document.body.style.margin = 0;
export default Map
