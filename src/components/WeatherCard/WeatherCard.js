import React, { Component } from 'react';
import classes from './WeatherCard.module.css';
import config from '../../config';
import axios from 'axios';

/*
  Name: WeatherCard
  Description: Component to store the weather information for a given city, entered by the user. This component reaches out to an API and stores the chosen data received into the state. This data is used in the output of the component.
  Props:
  - city: City which user has entered into the Search component, retrieved from App state
*/
class WeatherCard extends Component {
    state = {
        dataLoaded: false,
        userEnteredCity: this.props.city,
        weatherData: {
            'Name': '', 
            'Temperature': '',
            'Temperature - Feels Like': '',
            'Maximum Temperature': '',
            'Minimum Temperature': ''
        },
        dataLoadError: false
    }

    componentDidMount() {
        console.log('WeatherCard: Component mounted');
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.userEnteredCity}&units=metric&appid=${config.MY_KEY}`;

        axios.get(apiURL)
        .then(response => {
            console.log('WeatherCard: Data received from API');
            this.setState({dataLoaded: true});
            let responseData = response.data;
            let updatedState = this.state.weatherData;

            updatedState = {
                'Name': responseData.name,
                'Temperature': responseData.main.temp,
                'Temperature - Feels Like': responseData.main.feels_like,
                'Maximum Temperature': responseData.main.temp_max,
                'Minimum Temperature': responseData.main.temp_min
            };

            this.setState({weatherData: updatedState});
        })
        .catch(error => {
            console.log(error);
            this.setState({dataLoadError: true});
        })
    }

    render() {
        // Conditional rendering of the data associated with WeatherCard
        let weatherComponent = null;

        // Create list items for each piece of data loaded from the API
        if (this.state.dataLoaded) {
            let weatherDataValues = Object.entries(this.state.weatherData);
            weatherComponent = weatherDataValues.map(function(key, value) {
                if (typeof key[1] === "number")
                {
                    return <li id={key}>{`${key[0]}: ${key[1]}°c`}</li>
                }

                else {
                    return <li id={key}>{`${key[0]}: ${key[1]}`}</li>
                }
            })
        }

        else if (this.state.dataLoadError) {
            weatherComponent = <h4>Failed to load data for entered city - please try again!</h4>
        }

        else {
            weatherComponent = <h4>Loading data...</h4>
        }

        return (
            <div className={classes.WeatherCard}>
                {weatherComponent}
            </div>
        )
    }
}

export default WeatherCard;