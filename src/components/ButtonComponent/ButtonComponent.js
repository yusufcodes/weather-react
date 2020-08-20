import React, { Component } from 'react';
import classes from './Button.module.css';

/* Material UI imports */
import Button from '@material-ui/core/Button';

/*
  Name: ButtonComponent
  Description: Custom Button component, with a method passed in to the onClick attribute to perform some type of action
  Props:
  - clicked: A method passed into onClick, fired whenever the button is clicked
*/
class ButtonComponent extends Component {
    render() {
        return (
            <div className={classes.Button}>
                <Button
                onClick={this.props.clicked}
                variant="outlined"
                color="primary">
                {this.props.label}
                </Button>
            </div>
        )
    }
}

export default ButtonComponent;