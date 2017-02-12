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
    return <button className="sample button" type="button" onClick={() => clickButton()}>Button</button>;
  }

  render() {
    const {sample: {text}, name, label, clickButton} = this.props;
    return (
      <div className="sample-root">
        This is sample {name}
        {this.renderButton(clickButton)}
        <div className="sample text">{text}</div>
        <div>{label}</div>
      </div>
    );
  }
}
