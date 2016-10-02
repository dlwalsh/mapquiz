import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createPersistentStore from './createPersistentStore';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createPersistentStore);

function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

export default configureStore;
