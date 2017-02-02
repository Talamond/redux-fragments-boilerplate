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
