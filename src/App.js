import React, { Component } from 'react';

/* Component imports */
import Search from './components/Search/Search';
import Button from './components/Button/Button';
import WeatherCard from './components/WeatherCard/WeatherCard';

/* Material UI imports*/
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor(props) {
    // Needed to bind 'this' keyword to the current class, App, for it to work in the Button component
    super(props);
    this.displayWeatherCardToggle = this.displayWeatherCardToggle.bind(this);
  }

  state = {
    displayWeatherCard: false,
    userEnteredCity: null,
    weatherBtnClicked: false
  }

  // Currently it shows / hides based on click of button
  // To do: Just process whatever is entered into the search field
  displayWeatherCardToggle() {
    let oldState = {...this.state};

    this.setState({displayWeatherCard: !oldState.displayWeatherCard,
                    weatherBtnClicked: true});
  }

  searchToggle(event) {
    let updatedState = {...this.state.userEnteredCity};
    updatedState = event.target.value;
    this.setState({userEnteredCity: updatedState});
  }

  render()
  {
    let weatherCard = null;
    if (this.state.displayWeatherCard) {
      weatherCard = 
      <WeatherCard
      city={this.state.userEnteredCity}
      ></WeatherCard>
    }

    // Update to use dynamic classes instead of duplicating the component
    let search = null;
    search = <Search changed={(event) => this.searchToggle(event)}></Search>

    /* conditional search 
    if (this.state.weatherBtnClicked) {
      search = <Search disabled changed={(event) => this.searchToggle(event)}></Search>
    }
    else {
      search = <Search changed={(event) => this.searchToggle(event)}></Search>
    }
    */

    return (
      <Container fixed>
        <h1>Weather App</h1>
        <Grid
        container spacing={1}
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item xs={5}>
            {/* <Search changed={(event) => this.searchToggle(event)}></Search> */}
            {search}
          </Grid>
  
          <Grid item xs={2}>
            <Button clicked={this.displayWeatherCardToggle}></Button>
          </Grid>
        </Grid>
        {weatherCard}
      </Container>
    );
  } 
} // End of App class

export default App;
