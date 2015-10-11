import { CHOICE, GUESS, RESET } from '../constants/ActionTypes';

export default function (state = null, action) {

    switch (action.type) {

    case GUESS:
        return action.answer;

    case CHOICE:
    case RESET:
        return null;

    }

    return state;

}
