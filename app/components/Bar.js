import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';

export default class Bar extends Component {

    componentDidMount() {
        this.focus();
    }

    componentDidUpdate() {
        this.focus();
    }

    focus() {
        const { input } = this.refs;
        if (input) {
            input.focus();
        }
    }

    handleInput(value) {
        const { actions, choice } = this.props;
        actions.guess(choice, value);
    }

    render() {

        const { actions, choice, correct, value } = this.props;

        return (
            <div className="bar">
                <RaisedButton
                    label="Reset"
                    onTouchTap={actions.reset}
                    primary
                />
                <span className="entry-wrapper">
                    {choice !== null && (
                        <TextField
                            ref="input"
                            type="text"
                            hintText="Enter answer"
                            disabled={correct}
                            value={value}
                            onChange={(event) => this.handleInput(event.target.value)}
                        />
                    )}
                </span>
            </div>
        );

    }
}
