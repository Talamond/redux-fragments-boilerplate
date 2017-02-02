import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { prefix } from '../reducers/sampleReducer.js';
import { createSampleFragment } from '../fragments/sample/createSample.js';

@connect(state => ({
	sample: state.sample.root
}))
export class SampleContainer extends React.Component {
	static propTypes = {
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,

		timeline: PropTypes.object,
    mainData: PropTypes.object
	};

	componentWillMount() {
		this.Sample = createSampleFragment((store) => store.sample.fragments.sample1, prefix);
	}

	render() {
		const Sample = this.Sample;

		return (
      <Sample label="1"/>
		);
	}
}
