import React, { Component } from 'react'
import { connect } from 'react-redux'

class TemperatureGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            place: props.place
        }

        console.log(props)
    }

    componentDidMount() {
        let location = this.props.locations.find(loc => loc.place === this.state.place)
        let id = `myTempGraph_${this.state.index}`
        var ctx = document.getElementById(id).getContext('2d');
        new window.Chart(ctx, {
            type: 'line',
            data: {
                labels: location.data.temperature,
                datasets: [{
                    label: 'Temperature',
                    backgroundColor: 'rgb(251, 252, 189)',
                    borderColor: 'rgb(255, 167, 4)',
                    data: location.data.temperature

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
                <canvas height="150" width="250" id={`myTempGraph_${this.state.index}`}></canvas>
            </div >
        )
    }


}

const mapStoreToPropsConfig = state => {
    console.log('mapStoreToPropsConfig', state.locations)
    return {
        locations: state.locations
    }
}

export default connect(mapStoreToPropsConfig)(TemperatureGraph);