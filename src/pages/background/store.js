import { createStore } from 'redux';
import {wrapStore} from 'react-chrome-redux';

const initialState = {
  filter: '',
  json: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JSON':
      return Object.assign({}, state, {json: action.payload});

    case 'SET_FILTER':
      return Object.assign({}, state, {filter: action.filter});

    default:
      return state;
  }
}

const store = createStore(reducer);

wrapStore(store, {
  portName: 'JQ',
})

export default store;
