import { createActionTypes } from './sampleNestedActionTypes.js';
import { combineFragmentsHandlers, attachState } from 'redux-fragments';
import { initialState as sampleInitialState, createHandlers as sampleHandlers} from '../sample/sampleReducerHandlers.js';

export const samplePrefix = 'INNER_SAMPLE__';

const fragments = {
  sample: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...sampleHandlers('PREFIX_SAMPLE__' + samplePrefix) // TODO need to resolve this case
    }
  }
};

const initialState = {
  parentText: 'Parent not yet clicked'
};

export const getInitialState = () => {
  return attachState(initialState, fragments);
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
