import React, {PropTypes} from 'react';
import { Sample } from '../sample/sampleComponent.js';

export class SampleOverride extends Sample {

  static propTypes = {
    clickButton2: PropTypes.func // action
  };

  renderButton(clickButton) {
    return (
      <div>
        <button type="button" onClick={() => clickButton()}>Button</button>
        <button type="button" onClick={() => this.props.clickButton2()}>Button 2</button>
      </div>
    );
  }
}
