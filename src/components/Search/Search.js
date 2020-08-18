import React, { Component } from "react";
import classes from "./Search.module.css";

import TextField from '@material-ui/core/TextField';

class Search extends Component {
    componentDidMount() {
        window.removeEventListener("onChange", this.props.changed);
    }

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