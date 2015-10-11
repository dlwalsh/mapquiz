import React, { Component, PropTypes } from 'react';
import { geo } from 'd3';

const path = geo.path();

export default class SVGNode extends Component {

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
        actions.choice(index);
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

        const { data, choice, regions } = this.props;

        return (
            <svg viewBox={this.viewBox(path.bounds(data))}>
                {data.features.map((feat, i) => (
                    <g key={i}>
                        <path
                            d={path(feat.geometry)}
                            fill={regions[i].correct ? '#009688' : choice === i ? 'grey' : 'lightgrey'}
                            stroke="black"
                            onClick={() => this.handleClick(i)}
                        />
                    </g>
                ))}
            </svg>
        );

    }
}
