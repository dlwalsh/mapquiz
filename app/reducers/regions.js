import { GUESS, RESET } from '../constants/ActionTypes';
import data from '../data/usa.json';

const initialState = data.features.map((feat) => ({
    name: feat.properties.name,
    correct: false
}));

export default function (state = initialState, action) {

    switch (action.type) {

    case GUESS:
        const { answer, index } = action;
        return [
            ...state.slice(0, index),
            assessGuess(state[index], answer),
            ...state.slice(index + 1)
        ];

    case RESET:
        return state.map(resetAnswer);

    }

    return state;

}

function assessGuess(item, answer) {
    return Object.assign({}, item, {
        correct: item.name.toLowerCase() === answer.toLowerCase()
    });
}

function resetAnswer(item) {
    return Object.assign({}, item, {
        correct: false
    });
}
