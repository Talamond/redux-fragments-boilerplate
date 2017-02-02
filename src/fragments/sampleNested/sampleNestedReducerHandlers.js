import { createActionTypes } from './sampleNestedActionTypes.js';
import { combineFragmentsHandlers } from 'redux-fragments';
import { initialState as sampleInitialState, createHandlers as sampleHandlers} from '../sample/sampleReducerHandlers.js';

export const samplePrefix = 'INNER_SAMPLE__';

const fragments = {
  sample: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...sampleHandlers(samplePrefix)
    }
  }
};

export const initialState = {
  parentText: 'Parent not yet clicked'
};

export const createHandlers = (prefix) => {
	const actionTypes = createActionTypes(prefix);
	const handlers = {};

  handlers[actionTypes.CLICK_BUTTON_PARENT] = (state, payload) => {
    const newState = {...state};
    newState.parentText = 'Parent clicked!';
    return newState;
  };

	return combineFragmentsHandlers(handlers, fragments);
};
