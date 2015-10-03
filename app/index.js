import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import './styles/app.scss';

import '../../react-materialize';

ReactDOM.render(
    <Root />,
    document.querySelector('[data-mount]')
);