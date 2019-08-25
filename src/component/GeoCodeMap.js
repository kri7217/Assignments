import React, { Component } from 'react'

class GeoCodeMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place: props.place,
            index: props.index,
            lat: props.latitude,
            lon: props.longitude
        }
    }
    componentDidMount() {
        let mapAreaId = `${this.state.place}_${this.state.index}`
        window.L.mapquest.key = 'FUmlbelGIATwdhPtiH2ejKp5VX9rOGTC';

        let map = window.L.mapquest.map(mapAreaId, {
            center: [+this.state.lat, +this.state.lon],
            layers: window.L.mapquest.tileLayer('map'),
            zoom: 14
        });

        window.L.marker([+this.state.lat, +this.state.lon], {
            icon: window.L.mapquest.icons.marker(),
            draggable: false
        }).bindPopup().addTo(map);
    }
    render() {
        const style = {
            width: "250px",
            height: "150px"
        }
        const mapAreaId = `${this.state.place}_${this.state.index}`
        return (
            <div>
                <div id={mapAreaId} style={style}></div>
            </div>
        )
    }

}

export default GeoCodeMap