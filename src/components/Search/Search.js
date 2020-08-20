import React, { Component } from "react";
import classes from "./Search.module.css";

/* Material UI imports */
import TextField from '@material-ui/core/TextField';

/*
  Name: Search
  Description: Custom Search component where user can enter some form of text, this is then stored in
  the state of the component from which it is called from
  Props:
  - changed: A method passed into onChange, fired whenever user enters text into search
*/
class Search extends Component {
    render() {
        return (
            <div className={classes.Search}>
            <TextField
            onChange={this.props.changed}
            label="Enter city..."
            cariant="outlined"
            {...this.props}></TextField>
            </div>
        )
    }
    
}

export default Search;