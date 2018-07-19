import React, { Component } from 'react';
import './css/styles.css';


class Editor extends React.Component {
    render() {
      return (
        <textarea 
        id="editor" 
        name="input"  
        onChange={this.props.handleUserInputChange}>{this.props.userInput}</textarea>
      );
    }
  }

export default Editor;