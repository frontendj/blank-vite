// reducers/index.js
import { combineReducers } from 'redux';

import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    // add more reducers here if necessary
    counter: counterReducer,
});

export default rootReducer;
