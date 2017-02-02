import { createActionTypes } from './sampleOverrideActionTypes.js';
import { combineFragmentsHandlers } from 'redux-fragments';

const fragments = {
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = createActionTypes(prefix);
	const handlers = {};

  handlers[actionTypes.CLICK_BUTTON_2] = (state, payload) => {
    const newState = {...state};
    newState.text = 'clicked by button 2!';
    return newState;
  };

	return combineFragmentsHandlers(handlers, fragments);
};
