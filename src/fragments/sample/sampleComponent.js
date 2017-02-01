import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './sample.scss';


export class Sample extends React.Component {

  static propTypes = {
    sample: PropTypes.object, // state
    clickButton: PropTypes.func // action
  };

  renderButton() {
    return <div>Button</div>;
  }

  render() {
    return (
      <div className="sample-root">
        {this.renderButton()}
      </div>
    );
  }
}
