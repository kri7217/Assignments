import React, { Component } from 'react'
import  {connect} from 'react-redux'

//Component to render the Humidity of a place based on latitude and longitude
class HumidityGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            place: props.place
        }
    }

    componentDidMount() {
        let id = `myHumidityGraph_${this.state.index}`        
        let location = this.props.locations.find(loc => loc.place === this.state.place)
        var ctx = document.getElementById(id).getContext('2d');
                new window.Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: location.data.humidity,
                        datasets: [{
                            label: 'Humidity',
                            backgroundColor: 'rgba(90, 86, 86, 0.466)',
                            borderColor:'black',
                            data: location.data.humidity

                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                display: false
                            }],
                            yAxes: [{
                                display: false
                            }]
                        }
                    }
                })
    }

    render() {
        return (
            <div>
                <canvas height="150" width="250" id={`myHumidityGraph_${this.state.index}`}></canvas>
            </div >
        )
    }


}

const mapStoreToPropsConfig = state => {
    return {
        locations: state.locations
    }
}

export default connect(mapStoreToPropsConfig)(HumidityGraph);