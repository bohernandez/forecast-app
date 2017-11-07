import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

/*
class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;
*/

export default withScriptjs(withGoogleMap((props) =>
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
));
        /* <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
            } 
        /> */