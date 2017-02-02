import { createActionTypes } from './sampleActionTypes.js';
import { combineFragmentsHandlers } from 'redux-fragments';

const fragments = {
};

export const initialState = {
  text: 'Has not been clicked'
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = createActionTypes(prefix);
	const handlers = {};

  handlers[actionTypes.CLICK_BUTTON] = (state, payload) => {
    const newState = {...state};
    newState.text = 'clicked!';
    return newState;
  };

	return combineFragmentsHandlers(handlers, fragments);
};
