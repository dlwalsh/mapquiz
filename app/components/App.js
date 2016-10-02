import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import data from '../data/usa.json';
import Bar from './Bar';
import SVGNode from './SVGNode';
import * as RegionActions from '../actions';

export default class App extends Component {

    render() {

        const { answer, choice, dispatch, regions } = this.props;
        const correct = typeof choice === 'number' ? regions[choice].correct : false;
        const value = correct ? regions[choice].name : answer;
        const actions = bindActionCreators(RegionActions, dispatch);

        return (
            <div className="app">
                <div className="main">
                    <SVGNode
                        actions={actions}
                        choice={choice}
                        data={data}
                        regions={regions}
                    />
                </div>
                <Bar
                    actions={actions}
                    choice={choice}
                    correct={correct}
                    value={value}
                />
            </div>
        );

    }

}

export default connect((state) => ({
    answer: state.answer,
    choice: state.choice,
    regions: state.regions
}))(App);
