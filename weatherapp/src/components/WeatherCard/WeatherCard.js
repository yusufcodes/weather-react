import React, { Component } from 'react';
import classes from './WeatherCard.module.css';

class WeatherCard extends Component {
    state = {
        weatherData: {
            city: 'Manchester',
            temperature: '30deg',
            forecast: 'Cloudy'
        }
    }
    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        // Conditional render here when fetching from API
        return (
            <div className={classes.WeatherCard}>
                <h4>{this.props.city}</h4>
                <ul>
                    <li>{this.state.weatherData.temperature}</li>
                    <li>{this.state.weatherData.forecast}</li>
                </ul>
                <span>Icon Here</span>
            </div>
        )
    }
}

export default WeatherCard;