import { connect } from 'react-redux';
import { createActionCreators } from './sampleNestedActionCreator.js';
import { createActionTypes } from './sampleNestedActionTypes.js';
import { SampleNested } from './sampleNestedComponent';

export function createSampleNestedFragment(stateSelector, prefix) {
  const link = connect(store => ({
    sampleNested: stateSelector(store)
  }), createActionCreators(createActionTypes(prefix)));
  return link(SampleNested);
};

export function overrideSampleNestedFragment(stateSelector, prefix, actions, compClass) {
  let linkClass = SampleNested;
  if (compClass) {
    linkClass = compClass
  }
  let linkActions = createActionCreators(createActionTypes(prefix));
  if (actions) {
    linkActions = {
      ...linkActions,
      ...actions
    };
  }

  const link = connect(store => ({
    sampleNested: stateSelector(store)
  }), linkActions);
  return link(linkClass);
}
