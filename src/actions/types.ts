export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type ActionTypes = typeof DECREMENT | typeof INCREMENT;

export interface Action {
    type: ActionTypes;
}
