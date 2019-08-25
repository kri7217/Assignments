import React from 'react'
import TempChart from './TempChart'
import HumidityChart from './HumidityChart'
import PressureChart from './PressureChart'

const charts = function (props) {
    return (

        <div>
            <div className="chart" >
                <TempChart index={props.index} place={props.place}
                ></TempChart>
            </div>
            <div className="chart" >
                <HumidityChart  index={props.index} place={props.place}
                    ></HumidityChart>
            </div>
            <div className="chart" >
                <PressureChart index={props.index} place={props.place}
                    ></PressureChart>
            </div>
        </div>
    )

}

export default charts