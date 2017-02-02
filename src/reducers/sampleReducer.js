import { attachState, executeHandlers } from 'redux-fragments';
import { initialState as sampleInitialState, createHandlers } from '../fragments/sample/sampleReducerHandlers.js';
import { createActionTypes } from '../fragments/sample/sampleActionTypes.js';
import _ from 'lodash';

export const prefix = 'PREFIX__';
export const prefix2 = 'PREFIX2__';
export const prefix3 = 'PREFIX3__';

const sample3Types = createActionTypes(prefix3);

const fragments = {
  sample1: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix)
    }
  },
  sample2: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix2)
    }
  },
  sample3: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix3)
    }
  }
};

const initialState = {
  root: {
    labelTwoThree: 'Same label for 2 and 3'
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

handlers[sample3Types.CLICK_BUTTON] = (state, payload) => {
  const newState = _.cloneDeep(state);
  newState.root.labelTwoThree = 'A different label for 2 and 3';
  return newState;
};

