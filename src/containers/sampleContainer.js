import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { prefix, prefix2, prefix3, prefix4, prefixSample } from '../reducers/sampleReducer.js';
import { createSampleFragment, overrideSampleFragment } from '../fragments/sample/createSample.js';
import { SampleOverride } from '../fragments/sampleOverride/sampleOverrideComponent.js';
import { createActionCreators } from '../fragments/sampleOverride/sampleOverrideActionCreator.js';
import { createActionTypes } from '../fragments/sampleOverride/sampleOverrideActionTypes.js';
import { createSampleNestedFragment } from '../fragments/sampleNested/createSampleNested.js';

@connect(state => ({
	sample: state.sample.root // attaching to an object that does't contain fragments is important for performance
}))
export class SampleContainer extends React.Component {
	static propTypes = {
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,

    sample: PropTypes.object
	};

	componentWillMount() {
		this.Sample = createSampleFragment((store) => store.sample.fragments.sample1, prefix);
    this.Sample2 = createSampleFragment((store) => store.sample.fragments.sample2, prefix2);
    this.Sample3 = createSampleFragment((store) => store.sample.fragments.sample3, prefix3);
    this.Sample4 = overrideSampleFragment(
      (store) => store.sample.fragments.sample4,
      prefix4,
      createActionCreators(createActionTypes(prefix4)),
      SampleOverride
    );
    this.SampleNested = createSampleNestedFragment((store) => store.sample.fragments.sampleNested, prefixSample);
	}

	render() {
		const Sample = this.Sample;
    const Sample2 = this.Sample2;
    const Sample3 = this.Sample3;
    const Sample4 = this.Sample4;
    const SampleNested = this.SampleNested;

		return (
		  <div>
        <div>Sample 1 is independent and has no interaction with other fragments</div>
        <Sample name="1" label="hardcoded label"/>
        <div style={{paddingTop: '20px'}}>Sample 2 and 3 share the same label via the parent and react props.</div>
        <div>When the button in Sample 3 is clicked, they both change because the parent catches the action</div>
        <Sample2 name="2" label={this.props.sample.labelTwoThree}/>
        <Sample3 name="3" label={this.props.sample.labelTwoThree}/>
        <div style={{paddingTop: '20px'}}>Sample 4 overrides Sample 1.</div>
        <Sample4 name="4" label="label"/>
        <SampleNested selectReduxState={(store) => store.sample.fragments.sampleNested} prefix={prefixSample}/>
      </div>
		);
	}
}
