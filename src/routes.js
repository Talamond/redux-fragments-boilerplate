import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import {SampleContainer}  from './containers/sampleContainer.js';

export default (
  <Route path="/" component={AppContentContainer}>
    <IndexRoute component={SampleContainer}/>
    <Route path="/sample" component={SampleContainer}/>
  </Route>
);
