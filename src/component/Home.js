import React, { Component } from 'react';
import ChartMapMerger from './ChartMapMerger';
import { connect } from 'react-redux'
import { getCoOrdinates } from '../store/action/actionCreator'

class Home extends Component {


    clickHandler = () => {
        if (this.state.placeToSearch.trim() !== '') {
            this.props.addLocation(this.state.placeToSearch)
        }
    }

    //On click of Enter Key request for the location is sent
    keyDownHandler = (e) => {
        //console.log(e)
        if (e.target.value.trim() !== '' && e.key === 'Enter') {
            this.props.addLocation(e.target.value)

        }
    }

    render() {
        let locations = null
        if (this.props.locations) {
            //console.log('Home rendering')
            locations = (
                <div id="map_list">
                    {this.props.locations.map((location, i) => {
                        return (
                            <ChartMapMerger key={location.place} latitude={location.lat} index={i} place={location.place}
                                longitude={location.lon}></ChartMapMerger>
                        )
                    })}
                </div>
            )
        } else {
            locations = <div></div>
        }

        return (
            <div className="App mt-2 mb-2">
                <div>
                    <input type="text"
                        className="form-control mb-3 search_box d-inline"
                        id="textboxid"                        
                        onKeyDown={this.keyDownHandler}
                    ></input>
                    {/* <button className="btn btn-primary ml-2 d-inline" onClick={this.clickHandler}>Submit</button> */}
                </div>
                {locations}
            </div>
        )
    }
}
//Listening for changes in those state slices which component is interested
//When store changes Home component will receive store locations as location in props
const mapStoreToPropsConfig = state => {
    //console.log('mapStoreToPropsConfig', state.locations)
    return {
        locations: state.locations
    }
}

//To dispatch actions to reducer.
const mapStoreToDispatchAction = dispatch => {
    return {
        addLocation: (place) => {
            dispatch(getCoOrdinates(place))
        }
    };
}

export default connect(mapStoreToPropsConfig, mapStoreToDispatchAction)(Home);