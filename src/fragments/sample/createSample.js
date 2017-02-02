import { connect } from 'react-redux';
import { createActionCreators } from './sampleActionCreator.js';
import { createActionTypes } from './sampleActionTypes.js';
import { Sample } from './sampleComponent';

export function createSampleFragment(stateSelector, prefix) {
  const link = connect(store => ({
    sample: stateSelector(store)
  }), createActionCreators(createActionTypes(prefix)));
  return link(Sample);
};

export function overrideSampleFragment(stateSelector, prefix, actions, compClass) {
  let linkClass = Sample;
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
    sample: stateSelector(store)
  }), linkActions);
  return link(linkClass);
}
