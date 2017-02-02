import { attachState, executeHandlers } from 'redux-fragments';
import { initialState as sampleInitialState, createHandlers } from '../fragments/sample/sampleReducerHandlers.js';

export const prefix = 'PREFIX__';

const fragments = {
  sample1: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix)
    }
  }
};

const initialState = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
  const init = attachState(initialState, fragments);
	return init;
};

export function sample(state = getInitialState(), action) {
  const ret = executeHandlers(state, action, handlers, fragments);
	return ret;
}

/* eslint-disable no-param-reassign */

