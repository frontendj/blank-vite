// reducers/counterReducer.js
import { Action, DECREMENT, INCREMENT } from 'actions/types';

const initialState = 0; // Define the initial state of the counter

const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;
