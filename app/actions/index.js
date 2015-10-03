import * as types from '../constants/ActionTypes';

export function prompt(index) {
    return {
        type: types.PROMPT,
        index
    };
}

export function guess(index, guess) {
    return {
        type: types.GUESS,
        index,
        guess
    };
}

export function reset() {
    return {
        type: types.RESET
    };
}
