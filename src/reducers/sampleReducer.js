import { attachState, combineFragmentsHandlers } from 'redux-fragments';
import ReduxFragments from 'redux-fragments';
import { createActionTypes } from '../fragments/sample/sampleActionTypes.js';

export const prefix = 'PREFIX__';
const actionTypes = createActionTypes(prefix);

const fragments = {
};

const initialState = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
  ReduxFragments;
  attachState();
  combineFragmentsHandlers();
	return {};
};

export function sample(state = getInitialState(), action) {
	return {};
}

/* eslint-disable no-param-reassign */

