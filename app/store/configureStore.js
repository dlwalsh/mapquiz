import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createStore);

const reducer = compose(
    mergePersistedState()
)(rootReducer);

// only save state in regions reducer
const storage = compose(
    filter('regions')
)(adapter(window.localStorage));

const createPersistentStore = compose(
    persistState(storage, 'mapquiz') // localstorage key
)(createStoreWithMiddleware);

export default function configureStore(initialState) {

    return createPersistentStore(reducer, initialState);

}
