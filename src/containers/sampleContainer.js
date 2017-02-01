import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { prefix } from '../reducers/sampleReducer.js';

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
		// this.Timeline = crea((store) => store.timeline.fragments.timeline, prefix);
	}

	render() {
		// const Timeline = this.Timeline;

		return (
      <div>sample</div>
		);
	}
}
