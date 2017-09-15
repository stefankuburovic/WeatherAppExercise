import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather( cityData ) {
        if(!cityData.city) {
            return <td>
                
            </td>
        }
        const name        = cityData.city.name,
              temperature = cityData.list.map(weather => weather.main.temp),
              pressure    = cityData.list.map(weather => weather.main.pressure),
              humidity    = cityData.list.map(weather => weather.main.humidity),
             { lon, lat } = cityData.city.coord;
        return (
            <tr key={ name }>
                <td>
                    <GoogleMap lon={ lon } lat={ lat } />
                </td>
                <td>
                    <Chart data={ temperature } color="orange" units="C"/>
                </td>
                <td>
                    <Chart data={ pressure } color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={ humidity } color="black" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map( this.renderWeather ) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather } ) {
    return { weather }
}

export default connect( mapStateToProps )( WeatherList )