import React, {PropTypes} from 'react';
import './sample.scss';

export class Sample extends React.Component {

  static propTypes = {
    sample: PropTypes.object, // state
    name: PropTypes.string, // attribute
    label: PropTypes.string, // attribute
    clickButton: PropTypes.func // action
  };

  renderButton(clickButton) {
    return <button className="sample button" onClick={() => clickButton()}>Button</button>;
  }

  render() {
    const {sample: {text}, name, label, clickButton} = this.props;
    return (
      <div className="sample-root">
        <div>Name: {name}</div>
        <div>Label: {label}</div>
        <div className="sample button">{this.renderButton(clickButton)}</div>
        <div className="sample text">Redux State - text: {text}</div>
      </div>
    );
  }
}
