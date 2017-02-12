import React from 'react';
import { createSampleFragment } from '../src/fragments/sample/createSample.js';
import { createActionCreators } from '../src/fragments/sample/sampleActionCreator.js';
import { createActionTypes } from '../src/fragments/sample/sampleActionTypes.js';
import { createHandlers, initialState } from '../src/fragments/sample/sampleReducerHandlers.js';
import { executeHandlers } from 'redux-fragments';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);
const prefix = 'TEST__';

describe('Example Tests', () => {
  let exStore, handlers, actionTypes, actions, comp;
  beforeEach(() => {
    actionTypes = createActionTypes(prefix);
    actions = createActionCreators(actionTypes);
    exStore = mockStore({ ...initialState });
    handlers = createHandlers(prefix);
    const Sample = createSampleFragment(s => s, prefix);
    comp = mount(<Provider store={exStore}><Sample/></Provider>);
  });

  it('View to Action', () => {
    const button = comp.find('button');
    button.simulate('click');
    const lastAction = exStore.getActions()[0];
    expect(lastAction.type).toBe(actionTypes.CLICK_BUTTON);
  });

  it('Action to Reducer', () => {
    exStore.dispatch(actions.clickButton());
    const lastAction = exStore.getActions()[0];
    const newState = handlers[lastAction.type](exStore.getState(), lastAction.payload);
    expect(newState.text).toBe('clicked!');
  });

  it('Reducer to View', () => {
    exStore = mockStore({ text: 'custom' });
    const Sample = createSampleFragment(s => s, prefix);
    comp = mount(<Provider store={exStore}><Sample/></Provider>);
    expect(comp.find('.text').text()).toBe('custom');
  });

});
