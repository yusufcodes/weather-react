import React, { Component } from "react";
import classes from "./Search.module.css";

/* Material UI imports */
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

/*
  Name: Search
  Description: Custom Search component where user can enter some form of text, this is then stored in
  the state of the component from which it is called from
  Props:
  - changed: A method passed into onChange, fired whenever user enters text into search
*/
class Search extends Component {
    constructor() {
        super();
        this.storeInputValue = this.storeInputValue.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.inputRef = React.createRef();
    }

    state = {
        enteredValue: null
    }

    getInputValue() {
        return this.state.enteredValue;
    }

    storeInputValue(event) {
        /*
        const inputValue = this.inputRef.current;
        console.log(inputValue.value);
        */
       this.setState({enteredValue: event.target.value});
    }



    render() {
        return (
            <div className={classes.Search}>
                <Input
                id="inputSearch"
                ref={this.inputRef}
                onChange={(event) => this.storeInputValue(event)}
                label="Enter city..."
                cariant="outlined"
                {...this.props}></Input>
            </div>
        )
    }
    
}

export default Search;