import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from '../reducers';

const createPersistentStore = compose(
    persistState()
)(createStore);

export default function configureStore(initialState) {

    return createPersistentStore(rootReducer, initialState);

}
