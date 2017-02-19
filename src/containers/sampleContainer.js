import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { prefix, prefix2, prefix3, prefix4, prefixSample } from '../reducers/sampleReducer.js';
import { createSampleFragment, overrideSampleFragment } from '../fragments/sample/createSample.js';
import { SampleOverride } from '../fragments/sampleOverride/sampleOverrideComponent.js';
import { createActionCreators } from '../fragments/sampleOverride/sampleOverrideActionCreator.js';
import { createActionTypes } from '../fragments/sampleOverride/sampleOverrideActionTypes.js';
import { createSampleNestedFragment } from '../fragments/sampleNested/createSampleNested.js';
import './sampleContainer.scss';

// urls for boilerplate explanation
const SAMPLE_REDUCER = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/reducers/sampleReducer.js';
const FRAG_ACTION = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sample/sampleActionCreator.js';
const FRAG_RED = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sample/sampleReducerHandlers.js';
const FRAG_COMP = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sample/sampleComponent.js';
const FRAG_CREATE = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sample/createSample.js';
const FRAG_ROOT = 'https://github.com/Talamond/redux-fragments-boilerplate/tree/master/src/fragments';
const SAMPLE_CONT = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/containers/sampleContainer.js';
const BLOG_FRAG = 'https://talamond.github.io/blog/redux-fragments';
const BLOG_TEST = 'https://talamond.github.io/blog/testing-redux-fragments';

const REDUX_FRAG = 'https://github.com/Talamond/redux-fragments';
const OVER_COMP = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sampleOverride/sampleOverrideComponent.js';
const NEST_ROOT = 'https://github.com/Talamond/redux-fragments-boilerplate/tree/master/src/fragments/sampleNested';
const NEST_RED = 'https://github.com/Talamond/redux-fragments-boilerplate/blob/master/src/fragments/sampleNested/sampleNestedReducerHandlers.js';

@connect(state => ({
	sample: state.sample // attaching to an object that does't contain fragments is important for performance
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
		  <div className="sample-container-root">
        <div className="sampleCon welcome">redux-fragment-boilerplate</div>
        <div>Below are some samples demonstrating redux-fragments. For an introduction to <a href={REDUX_FRAG}>redux-fragments</a>, checkout my <a href={BLOG_FRAG}>blog</a>.</div>
        <div>In <a href={FRAG_ROOT}>src/fragments</a> you'll find all the fragments use in these samples.</div>
        <div>The main fragment, sample, is simple, it contains:</div>
        <ul>
          <li>A <a href={FRAG_RED}>redux state</a> with with one member "text" that is defaulted to "Not Clicked"</li>
          <li>An <a href={FRAG_ACTION}>action</a> "clickButton" which is fired when the button is clicked</li>
          <li>A <a href={FRAG_RED}>reducer handler</a> "CLICK_BUTTON" which catched the clickButton action and changes "text" state to "clicked!"</li>
          <li>A <a href={FRAG_COMP}>React Component</a> that has 2 attributes, label and name</li>
          <li>A <a href={FRAG_CREATE}>function</a> to help instantiate a fragment.</li>
        </ul>
        <div className="sampleCon title">Sample 1 - Basic Usage</div>
        <div>In Sample 1, we're just plugging in a standard fragment. Click the button and watch the redux state change. You can check the console and see the SAMPLE_1__CLICK_BUTTON action is fired. Note that the other samples use the same fragment, but their state does not change! Look in <a href={SAMPLE_CONT}>here</a> in componentWillMount to see how this fragment was created.</div>
        <Sample name="Sample 1" label="Sample 1 has a boring label"/>
        <div className="sampleCon title">Sample 2/3 - Sharing state and overwriting handlers</div>
        <div>Sample 2 and 3 are again using the same fragment as Sample 1. This time, Sample 2 and 3 share the same label attribute. Click Sample 2's button and you'll see it works the same way as Sample 1. Sample 3's button however has been overwriten. Instead of changing the "text" redux state, the parent catches the action and changes the shared label between Sample 2 and 3. Overwriting behaviour is simply achieved by adding a handler in the parent of the fragment. You will find this as the bottom of <a href={SAMPLE_REDUCER}>here</a>, who is the parent of all the fragments in this boilerplate. This demonstrates a method of sharing state between 2 fragments as well as overwriting a fragment's handlers without affecting other instances.</div>
        <div className="sampleCon sample2">
          <Sample2 name="Sample 2" label={this.props.sample.root.labelTwoThree}/>
        </div>
        <div className="sampleCon sample3">
          <Sample3 name="Sample 3" label={this.props.sample.root.labelTwoThree}/>
        </div>
        <div className="sampleCon title">Sample 4 - Extending the view</div>
        <div>Sample 4 is again using the same fragment. This time, we're going to add something to the React component's view. Instead of showing just one button, we want to show 2, and the second button will do something completely new. Other than that we want our fragment to remain the same. To do this, instead of using createSampleFragment method, we will use <a href={FRAG_CREATE}>overrideSampleFragment</a>. With overrideSampleFragment, we can provide new actions and a new React class to connect to. Our new <a href={OVER_COMP}>React class</a> extends from the fragment's React Component and overwrites the renderButton function and draws 2 buttons where the old button fires the same action as before and the new button fires out new action. Click the first button and you'll see that standard fragment behaviour, but when you click the second button you'll see some different text.</div>
        <Sample4 name="Sample 4" label="Sample 4 has a boring label"/>
        <div>Please note that extending the view is limited. First of all to do it nicely, your React component has to be split up into several render functions so you can overwrite only certain parts of it. Second, you can only extend the root React component, none of the children! You should only extend when you want to make very minor changes. Major changes should likely just become an independent fragment.</div>
        <div className="sampleCon title">Sample 5 - Nest fragments</div>
        <div>Once you start writing with fragments, you'll quickly realize that you often need to put fragments in fragments! In Sample 5, we have a new fragment <a href={NEST_ROOT}>sampleNested</a>. Do to this, you have to make sure your fragment's <a href={NEST_RED}>initialState</a> uses attachState function and that the handlers use combineFragmentsHandlers. This fragment has within it another sample fragment. I gave Sample 5 an ugly red border so you can see it.</div>
        <div className="sampleCon sampleNested">
          <SampleNested selectReduxState={(store) => store.sample.fragments.sampleNested} prefix={prefixSample}/>
        </div>
        <div className="sampleCon end">This concludes the sample fragments. In the test folder you'll find some sample tests. If you wanna learn more about that, checkout my <a href={BLOG_TEST}>testing blog</a>.</div>
      </div>
		);
	}
}
