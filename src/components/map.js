import React, {Component} from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import guides from '../data/guides.json'
import '../App.css';

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
      },
      selectedTour: null,
      setSelectedTour: null
    };
  }

  render() {
    return (
       <div>
            <MapGL
                {...this.state.viewport}
                width="100vw"
                height="80vh"
                mapStyle="mapbox://styles/hbooboo/ck63y1z7v04rq1inwxtcewbzu"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                {guides.map(guide => (
                    <Marker key={guide.id} latitude={guide.latitude} longitude={guide.longitude}>
                        <button class="marker-btn" onClick={(e) => 
                            {e.preventDefault();
                            this.setState({ setSelectedTour: guide, selectedTour: guide })}}>
                            <img src="https://www.pinclipart.com/picdir/middle/44-448302_flag-icon-red-red-flag-icon-transparent-clipart.png" alt="Tours" />
                        </button>
                    </Marker>
                ))}
                
                {this.state.selectedTour ? (
                    <Popup 
                    latitude={this.state.selectedTour.latitude} 
                    longitude={this.state.selectedTour.longitude}
                    onClose={() => 
                        this.setState({ setSelectedTour: null, selectedTour: null })}>
                        <div>
                            <h2>{this.state.selectedTour.firstName} {this.state.selectedTour.lastName}</h2>
                            <p>Phone: {this.state.selectedTour.contact}</p>
                        </div>
                    </Popup>
                ) : null}
            </MapGL>
        </div> 
    );
  }
}

document.body.style.margin = 0;
export default Map
