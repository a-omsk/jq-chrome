import React, { Component } from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

import {noJson, setJson} from '../background/actions';

const store = new Store({
  portName: 'JQ',
})

export default class InjectApp extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.output && nextProps.output) {
      const jsonElement = document.querySelector('body > pre');

      jsonElement.style.display = "none";
    }

    if (this.props.output && !nextProps.output) {
      const jsonElement = document.querySelector('body > pre');

      jsonElement.style.display = "block";
    }
  }

  render() {
      if (!this.props.output) {
        return null;
      }

      return (
        <pre style={{textAlign: 'left'}}>{this.props.output}</pre>
      );
  }
}

const mapStateToProps = (state) => state

const ConnectedInjectApp = connect(mapStateToProps)(InjectApp);

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);

  const jsonElement = document.querySelector('body > pre');

  store.ready().then(() => {
    if (jsonElement) {
      try {
        JSON.parse(jsonElement.innerText);

        store.dispatch(setJson(jsonElement.innerText))
      } catch (e) {
        store.dispatch(noJson())
      }
    }

    render(
      <Provider store={store}>
        <ConnectedInjectApp />
      </Provider>
      , injectDOM);
  });
})
