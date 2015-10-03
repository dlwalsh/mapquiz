import { PROMPT, RESET } from '../constants/ActionTypes';

export default function prompt(state = null, action) {

    switch (action.type) {

    case PROMPT:
        return action.index;

    case RESET:
        return null;

    }

    return state;

}
