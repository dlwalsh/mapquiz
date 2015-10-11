import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createStore);

const createPersistentStore = compose(
    persistState()
)(createStoreWithMiddleware);

export default function configureStore(initialState) {

    return createPersistentStore(rootReducer, initialState);

}
