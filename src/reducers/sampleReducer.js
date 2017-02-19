import { attachState, executeHandlers } from 'redux-fragments';
import { initialState as sampleInitialState, createHandlers } from '../fragments/sample/sampleReducerHandlers.js';
import { createHandlers as overrideHandlers } from '../fragments/sampleOverride/sampleOverrideReducerHandlers.js';
import { createActionTypes } from '../fragments/sample/sampleActionTypes.js';
import { getInitialState as nestedInitialState, createHandlers as nestedHandlers } from '../fragments/sampleNested/sampleNestedReducerHandlers.js';
import _ from 'lodash';

export const prefix = 'SAMPLE_1__';
export const prefix2 = 'SAMPLE_2__';
export const prefix3 = 'SAMPLE_3__';
export const prefix4 = 'SAMPLE_4__';
export const prefixSample = 'PREFIX_SAMPLE__';

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
  },
  sample4: {
    state: {
      ...sampleInitialState
    },
    handlers: {
      ...createHandlers(prefix4),
      ...overrideHandlers(prefix4)
    }
  },
  sampleNested: {
    state: {
      ...nestedInitialState()
    },
    handlers: {
      ...nestedHandlers(prefixSample)
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

// overwrite sample 3's behavior!
handlers[sample3Types.CLICK_BUTTON] = (state, payload) => {
  const newState = _.cloneDeep(state);
  newState.root.labelTwoThree = 'A different label for 2 and 3';
  return newState;
};

