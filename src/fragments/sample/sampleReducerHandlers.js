import { createActionTypes } from './sampleActionTypes.js';
import * as ReducerHelper from '../../utils/reducerHelper';

const fragments = {
};

export const initialState = {
  text: 'No action has been fired'
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = createActionTypes(prefix);
	const handlers = {};

  handlers[actionTypes.CLICK_BUTTON] = (newState, payload) => {
    newState.text = 'clicked!';
    return newState;
  };

	return ReducerHelper.addFragmentsHandlers(handlers, fragments);
};
