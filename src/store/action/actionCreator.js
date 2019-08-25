export const ADDLOCATION = "ADDLOCATION"

export const addLocation = (location) => {
    return {
        type: ADDLOCATION,
        payload: location
    }
}

//Fetch lat and lng and then the temp, pressure, and humidity for the corresponding lat and lng
export const getCoOrdinates = (place) => {

    var coOrdinates = null;
    return dispatch => {
        let locationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=93f825c6f77049e3b71d353a12abb535`
        fetch(locationUrl)
            .then(res => res.json())
            .then(data => {
                coOrdinates = data.results[0].geometry

                let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coOrdinates.lat}&lon=${coOrdinates.lng}&appid=93c21f29c2521aa3575c8d189ffd66a9`

                return fetch(weatherUrl)
            })
            .then(res => res.json())
            .then(data => {
                let weatherData = {
                    temperature: data.list.map(x => x.main.temp - 273.15),
                    humidity: data.list.map(x => x.main.humidity),
                    pressure: data.list.map(x => x.main.pressure)
                }

                let location = {
                    lat:coOrdinates.lat,
                    lon:coOrdinates.lng,
                    place: place,
                    data: weatherData
                }
                dispatch(addLocation(location))
            })
            .catch(err=>console.log(err))
    }


}