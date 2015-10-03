import React from 'react';
import { geo } from 'd3';

const path = geo.path();

export default ({
    data = null,
    fill = 'lightgray',
    onClick = null
}) => (
    <path d={data} fill={fill} stroke="black" onClick={onClick} />
);
