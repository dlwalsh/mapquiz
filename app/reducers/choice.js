import { CHOICE, RESET } from '../constants/ActionTypes';

export default function (state = null, action) {

    switch (action.type) {

    case CHOICE:
        return action.index;

    case RESET:
        return null;

    }

    return state;

}
