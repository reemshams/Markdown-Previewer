import React, { Component } from 'react';
import './css/styles.css';
import Preview from './Preview'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="heading">Markdown Previewer</h1>
          <hr />
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
