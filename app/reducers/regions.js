import { GUESS, RESET } from '../constants/ActionTypes';
import data from '../data/usa.json';

const initialState = data.features.map((feat) => ({
    name: feat.properties.name,
    correct: false
}));

export default function regions(state = initialState, action) {

    switch (action.type) {

    case GUESS:
        const { guess, index } = action;
        return [
            ...state.slice(0, index),
            assessGuess(state[index], guess),
            ...state.slice(index + 1)
        ];

    case RESET:
        return state.map(resetAnswer);

    }

    return state;

}

function assessGuess(item, guess) {
    return Object.assign({}, item, {
        correct: guess === item.name
    });
}

function resetAnswer(item) {
    return Object.assign({}, item, {
        correct: false
    });
}
