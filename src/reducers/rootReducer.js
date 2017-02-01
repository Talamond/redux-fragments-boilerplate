import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { sample } from './sampleReducer.js';

export const rootReducer = combineReducers({
	routing: routerReducer, // fixed name from lib
	sample
});
