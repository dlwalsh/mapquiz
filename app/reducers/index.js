import { combineReducers } from 'redux';
import prompt from './prompt';
import regions from './regions';

const rootReducer = combineReducers({
    prompt,
    regions
});

export default rootReducer;
