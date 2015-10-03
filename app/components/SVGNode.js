import React, { Component, PropTypes } from 'react';
import { geo } from 'd3';

const path = geo.path();

export default class SVGNode extends Component {

    componentDidUpdate() {
        this.promptGuess();
    }

    viewBox([
        [left, top],
        [right, bottom]
    ]) {

        return [
            left,
            top,
            right - left, // width
            bottom - top // height
        ].join(' ');

    }

    handleClick(index) {
        const { actions } = this.props;
        actions.prompt(index);
    }

    promptGuess() {

        const { actions, prompt, regions } = this.props;

        if (typeof prompt === 'number' && !regions[prompt].correct) {
            const guess = window.prompt('Name the state:');
            if (guess === null) { // Cancel button
                actions.prompt(null);
            } else {
                actions.guess(prompt, guess);
            }
        }

    }

    coordinates([
        [left, top],
        [right, bottom]
    ]) {

        return {
            x: (left + right) / 2,
            y: (top + bottom) / 2
        };

    }

    render() {

        const { data, prompt, regions } = this.props;

        return (
            <svg viewBox={this.viewBox(path.bounds(data))}>
                {data.features.map((feat, i) => (
                    <g key={i}>

                        <path
                            d={path(feat.geometry)}
                            fill={regions[i].correct ? 'green' : prompt === i ? 'grey' : 'lightgrey'}
                            stroke="black"
                            onClick={() => this.handleClick(i)}
                        />
                        <text
                            fill="black"
                            fontFamily="sans-serif"
                            fontSize="10"
                            style={{ textTransform: 'uppercase' }}
                            x={this.coordinates(path.bounds(feat)).x}
                            y={this.coordinates(path.bounds(feat)).y}
                        >
                            {feat.properties.name}
                        </text>
                    </g>
                ))}
            </svg>
        );

    }
}

SVGNode.propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object,
    prompt: PropTypes.number,
    regions: PropTypes.array
};
