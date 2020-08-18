import React, { Component } from 'react';
import classes from './Button.module.css';
import Button from '@material-ui/core/Button';

class ButtonComponent extends Component {
    render() {
        return (
            <div className={classes.Button}>
                <Button
                onClick={this.props.clicked}
                variant="outlined"
                color="primary">
                Search
                </Button>
            </div>
        )
    }
}

export default ButtonComponent;