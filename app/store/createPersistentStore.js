import { createStore, compose } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const storage = filter('regions')(
    adapter(window.localStorage)
);

const createStoreWithStorage = compose(
    persistState(storage, 'mapquiz')
)(createStore);

const merge = mergePersistedState();

function createPersistentStore(reducer, initialState) {

    return createStoreWithStorage(merge(reducer), initialState);

}

export default createPersistentStore;
