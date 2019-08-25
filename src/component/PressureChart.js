import React, { Component } from 'react'
import {connect} from 'react-redux'

class PressureGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            place: props.place
        }
    }

    componentDidMount() {
        let id = `myPressureGraph_${this.state.index}`
        let location = this.props.locations.find(loc => loc.place === this.state.place)
        var ctx = document.getElementById(id).getContext('2d');
        new window.Chart(ctx, {
            type: 'line',
            data: {
                labels: location.data.pressure,
                datasets: [{
                    label: 'Pressure',
                    backgroundColor: 'rgb(148, 247, 148)',
                    borderColor: 'rgb(2, 97, 18)',
                    data: location.data.pressure

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
                <canvas height="150" width="250" id={`myPressureGraph_${this.state.index}`}></canvas>
            </div >
        )
    }


}

const mapStoreToPropsConfig = state => {
    return {
        locations: state.locations
    }
}

export default connect(mapStoreToPropsConfig)(PressureGraph);