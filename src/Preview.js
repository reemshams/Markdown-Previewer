import React, { Component } from 'react';
import './css/styles.css';
import Editor from './Editor'
import marked from 'marked'


class Preview extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        userInput: placeholder
      }
      this.handleUserInputChange = this.handleUserInputChange.bind(this);
    }
  
    handleUserInputChange(event) {
      this.setState({ userInput: event.target.value });
    }
  
    getMarkup(value) {
      return {__html: marked(value, {renderer: renderer})};
    }
  
    render() {
      return (
        <div className="row">
          <div className="col-md-6 inputText">
            <h2 className="inputHeading">Enter Markdown Below </h2>
            <Editor userInput={this.state.userInput} handleUserInputChange={this.handleUserInputChange} />
            
          </div>

          <div className="col-md-6 outputText">
            <h3 className="outputHeading">Output here</h3>
  
            <div id="preview" dangerouslySetInnerHTML={this.getMarkup(this.state.userInput)}></div>
          </div>
        </div>
          
      )
    }
  }

  marked.setOptions({
    breaks: true,
  });
  
  
  const renderer = new marked.Renderer();
  
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

  const placeholder = 
`# This is a heading
---

## This is a sub-heading...
### And here are some other cool stuff:
  
Here\'s a code, \`<div></div>\`.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
**This is a bold text**... wala!

*This text is italicized*  
_So is this_  

Anddd... wait for it... **_both!_**

~~This is mistake.~~

Below is a blockquote
> Block Quotes!


Unordered lists                  

* Fish  
* Shrimps  
* Crab                  


Nested & ordered Lists                  

  1. Fruits
    * Apple
    * Orange
    * Banana


  2. Vegetables
    * Potato
    * Spinach
    * Onion


  3. Snacks
    * Chips
    * Chocolate
    * Biscuit

 
This app was built using [React](https://facebook.github.io/react/index.html) 

![React Logo w/ Text](https://goo.gl/Umyytc)
`
  

export default Preview;