import * as types from '../constants/ActionTypes';

export function choice(index) {
    return {
        type: types.CHOICE,
        index
    };
}

export function guess(index, answer) {
    return {
        type: types.GUESS,
        index,
        answer
    };
}

export function reset() {
    return {
        type: types.RESET
    };
}
