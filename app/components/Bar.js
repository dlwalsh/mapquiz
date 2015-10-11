import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

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
            findDOMNode(input).focus();
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
                <button
                    className="waves-effect red darken-2 btn"
                    onClick={actions.reset}
                >
                    Reset
                </button>
                <span className="entry-wrapper">
                    {choice !== null && (
                        <input
                            ref="input"
                            type="text"
                            className={correct ? 'correct' : 'entry'}
                            disabled={correct}
                            onChange={(event) => this.handleInput(event.target.value)}
                            value={value}
                        />
                    )}
                </span>
            </div>
        );

    }
}
