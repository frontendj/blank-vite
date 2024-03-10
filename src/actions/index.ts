// actions/index.js
import { DECREMENT, INCREMENT } from './types';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

type ActionTypes = typeof DECREMENT | typeof INCREMENT;
