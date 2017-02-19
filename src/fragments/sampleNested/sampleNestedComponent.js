import React, {PropTypes} from 'react';
import { createSampleFragment } from '../sample/createSample.js';
import { samplePrefix } from './sampleNestedReducerHandlers.js';

export class SampleNested extends React.Component {

  static propTypes = {
    sampleNested: PropTypes.object, // redux state
    selectReduxState: PropTypes.func.isRequired, // attribute
    prefix: PropTypes.string.isRequired, // attribute
    clickButtonParent: PropTypes.func // action
  };

  constructor(props, context) {
    super(props, context);
    this.Sample = createSampleFragment((state) => {
      return state.sample.fragments.sampleNested.fragments.sample;
    }, props.prefix + samplePrefix);
  }

  render() {
    const Sample = this.Sample;
    return (<div style={{border: '1px solid red'}}>
      <div>This fragment has a Sample Fragment inside of it</div>
      <button type="button" onClick={() => this.props.clickButtonParent()}>Parent Button</button>
      <div>{this.props.sampleNested.parentText}</div>
      <Sample name="5" label="Nested"/>
    </div>);
  }
}
