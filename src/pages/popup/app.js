import React, { Component } from 'react';

import jq from 'jq-web/jq.wasm.js';

setTimeout(() => {
  console.log(jq.raw('{"hello": {"world": 42}}', '.hello.world'));
}, 3000)


class App extends React.Component {
  render () {
    return (
      <div>
        hello world
      </div>
    );
  }
}

export default App;
