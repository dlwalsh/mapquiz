import React from 'react';

export default ({
    data = null,
    fill = 'lightgray',
    onClick = null
}) => (
    <path d={data} fill={fill} stroke="black" onClick={onClick} />
);
