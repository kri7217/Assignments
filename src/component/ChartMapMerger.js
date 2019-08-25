import React from 'react'
import Charts from './Chart'
import Map from './GeoCodeMap'

const ChartMapMerge = function(props){

    console.log('ChartMapMerger  processing')
        return (
            <div className="mt-2 mb-3">
                <div className="map_Division chart">
                    <Map place={props.place} index={props.index} 
                    latitude={props.latitude} longitude={props.longitude}></Map>
                </div>
                <div className="chart">
                    <Charts  index={props.index} place={props.place} ></Charts>
                </div>
            </div>
        )
}

export default ChartMapMerge