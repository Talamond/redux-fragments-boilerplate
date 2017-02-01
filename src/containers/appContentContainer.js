import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
	router: state.router
}))
export default class Main extends Component {
	static propTypes = {
		appContentContainer: PropTypes.object,
		children: PropTypes.object,
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array
	};

	render() {
		return (
			<div className="app-root">
        <div className="app-main">
          {this.props.children}
        </div>
			</div>
		);
	}
}
