import React, {PropTypes} from 'react';
import './sample.scss';

export class Sample extends React.Component {

  static propTypes = {
    sample: PropTypes.object, // state
    label: PropTypes.string, // attribute
    clickButton: PropTypes.func // action
  };

  renderButton(clickButton) {
    return <button type="button" onClick={() => clickButton()}>Button</button>;
  }

  render() {
    const {sample: {text}, label, clickButton} = this.props;
    return (
      <div className="sample-root">
        This is sample {label}
        {this.renderButton(clickButton)}
        <div>{text}</div>
      </div>
    );
  }
}
