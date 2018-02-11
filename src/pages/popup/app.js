import React, { Component } from 'react';
import { Button, Icon } from "semantic-ui-react";
import "./app.css";

// import jq from 'jq-web/jq.wasm.js';

// setTimeout(() => {
//   console.log(jq.raw('{"hello": {"world": 42}}', '.hello.world'));
// }, 3000)


class App extends Component {
  constructor() {
    super();
    this.state = {
      iconName: "transgender"
    }
  }

  handleClick () {
    if (this.state.iconName == "transgender") {
      this.setState({iconName: "gay"}); 
    } else {
      this.setState({iconName: "transgender"});
    }
  }

  render () {
    return (
      <div className="jq-app">
        Hello, world!
        <Button icon onClick={this.handleClick.bind(this)}>
          <Icon name={this.state.iconName} size="big"/>
        </Button>
      </div>
    );
  }
}

export default App;
