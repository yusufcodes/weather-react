import React, { Component } from 'react';

/* Component imports */
import Search from './components/Search/Search';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import WeatherCard from './components/WeatherCard/WeatherCard';

/* Material UI imports*/
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/*
  Name: App
  Description: All app contents loaded from this component
  */
class App extends Component {
  constructor(props) {
    // Needed to bind 'this' keyword to the current class, App, for it to work in the Button component
    super(props);
    this.displayWeatherCardToggle = this.displayWeatherCardToggle.bind(this);
  }

  state = {
    displayWeatherCard: false, // Will output WeatherCard component when true
    userEnteredCity: null, // Store the city that the user types into the Search component

    // * Logic error with this: I need WeatherCard to load if: user entered city and button is pressed.
    // Currently it shows / hides per click
    weatherBtnClicked: false // * Determine if Button component is clicked: to load the WeatherCard
  }

  // * Currently it shows / hides based on click of button
  // * To do: Just process whatever is entered into the search field
  displayWeatherCardToggle() {

    let oldState = this.state.weatherBtnClicked;
    this.setState({weatherBtnClicked: !oldState});
  }

  /*
  Name: searchToggle
  Parameters: event
  Description: Update the user entered city each time they type, storing it into App state
  */
  searchToggle(event) {
    let updatedState = {...this.state.userEnteredCity};
    updatedState = event.target.value;
    this.setState({userEnteredCity: updatedState});
  }

  render()
  {
    // Conditional rendering of the WeatherCard 
    // * Logic error here:
    let weatherCard = null;
    if (this.state.weatherBtnClicked) {
      console.log('Loading weather card...');
      weatherCard = 
      <WeatherCard
      city={this.state.userEnteredCity}
      ></WeatherCard>
    }

    else {
      weatherCard = <h4>Please enter a city</h4>
    }

    return (
      <Container fixed>
        <h1>Weather App</h1>
        <Grid
        container spacing={1}
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item xs={5}>
            <Search changed={(event) => this.searchToggle(event)}></Search>
          </Grid>
  
          <Grid item xs={2}>
            <ButtonComponent clicked={this.displayWeatherCardToggle}></ButtonComponent>
          </Grid>
        </Grid>
        {weatherCard}
      </Container>
    );
  } 
} // End of App class

export default App;