import React, { Component, PropTypes } from 'react';

import Button from '../../../react-materialize/src/Button';

export default class Bar extends Component {

    render() {

        const { actions } = this.props;

        return (
            <div className="bar">
                <Button
                    className="waves-effect indigo btn"
                    waves="effect"
                    onClick={actions.reset}
                >
                    Reset
                </Button>
            </div>
        );

    }
}

Bar.propTypes = {
    actions: PropTypes.object.isRequired
};
