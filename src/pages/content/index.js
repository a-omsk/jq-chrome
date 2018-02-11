import React, { Component } from 'react';
import { render } from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

const store = new Store({
  portName: 'JQ',
})

export default class InjectApp extends Component {
  render() {
    return (
      <div class="siegheil">hello</div>
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
    // if (jsonElement) {
    //   try {
    //     JSON.parse(jsonElement.innerText);

    //     store.dispatch({
    //       action: 'SET_JSON',
    //       payload: jsonElement.innerText,
    //     })
    //   } catch (e) {
    //     store.dispatch({
    //       action: 'NOT_JSON',
    //     })
    //   }
    // }

    render(
      <Provider store={store}>
        <ConnectedInjectApp />
      </Provider>
      , injectDOM);
  });
})
