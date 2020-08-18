import React, { Component } from 'react';
import classes from './WeatherCard.module.css';
import config from '../../config';
import axios from 'axios'


class WeatherCard extends Component {
    state = {
        dataLoaded: false,
        userEnteredCity: this.props.city,
        weatherData: {
            name: '', 
            temp: '',
            feels_like: '',
            temp_max: '',
            temp_min: ''
        },
        dataLoadError: false
    }
    componentDidMount() {
        console.log('WeatherCard: Component mounted');
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.userEnteredCity}&units=metric&appid=${config.MY_KEY}`

        axios.get(apiURL)
        .then(response => {
            console.log('Data loaded');
            this.setState({dataLoaded: true});
            let responseData = response.data;
            let updatedState = this.state.weatherData;

            updatedState = {
                name: responseData.name,
                temp: responseData.main.temp,
                feels_like: responseData.main.feels_like,
                temp_max: responseData.main.temp_max,
                temp_min: responseData.main.temp_min
            };

            this.setState({weatherData: updatedState});

        })
        .catch(error => {
            console.log(error);
            this.setState({dataLoadError: true});
        })

        // response.data.:
        /*
        Main object
        .temp
        .feels_like
        .temp_max
        .temp_min
        
        */

        // Take the user entered city and query the API
    }

    render() {
        let weatherComponent = null;

        if (this.state.dataLoaded)
        {
            let weatherDataValues = Object.values(this.state.weatherData)

            weatherComponent = weatherDataValues.map(function(data) {
                return <li>{data}</li>
            })
        }

        else if (this.state.dataLoadError)
        {
        weatherComponent = <h4>Failed to load data for entered city: {this.state.userEnteredCity} - please try again!</h4>
        }

        else {
            console.log('Loading data...');
        }

        

        // Conditional render here when fetching from API
        return (
            <div className={classes.WeatherCard}>
                    {weatherComponent}
            </div>
        )
    }
}

export default WeatherCard;