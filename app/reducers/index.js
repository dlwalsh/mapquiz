import { combineReducers } from 'redux';
import answer from './answer';
import choice from './choice';
import regions from './regions';

const rootReducer = combineReducers({
    answer,
    choice,
    regions
});

export default rootReducer;
