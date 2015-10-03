import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Bar from './Bar';
import SVGNode from './SVGNode';
import data from '../data/usa.json';
import * as RegionActions from '../actions';

export default class App extends Component {

    render() {

        const { dispatch, prompt, regions } = this.props;
        const actions = bindActionCreators(RegionActions, dispatch);

        return (
            <div className="app">
                <div className="main">
                    <SVGNode
                        actions={actions}
                        data={data}
                        prompt={prompt}
                        regions={regions}
                    />
                </div>
                <Bar
                    actions={actions}
                />
            </div>
        );

    }

}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    prompt: PropTypes.number,
    regions: PropTypes.array.isRequired
};

export default connect((state) => ({
    prompt: state.prompt,
    regions: state.regions
}))(App);
