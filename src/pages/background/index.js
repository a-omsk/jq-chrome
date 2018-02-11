import { createStore } from 'redux';
import {wrapStore} from 'react-chrome-redux';
import jq from 'jq-web/jq.wasm.js';

import {SET_FILTER, NO_JSON, SET_JSON} from './actions';

const initialState = {
  isJSON: true,
  filter: '',
  json: '',
  output: '',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JSON:
      return Object.assign({}, state, {
        json: action.payload,
      });

    case NO_JSON:
      return Object.assign({}, state, {
        isJSON: false,
        json: action.payload,
      });

    case SET_FILTER:
      let error = null;
      let output = '';

      try {
        output = jq.raw(state.json, action.filter);
      } catch (e) {
        error = e.message;
      }

    return Object.assign({}, state, {
      filter: action.filter,
      output,
      error,
    });

    default:
      return state;
  }
}

const store = createStore(reducer);

wrapStore(store, {
  portName: 'JQ',
})

export default store;
