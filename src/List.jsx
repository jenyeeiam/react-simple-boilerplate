import React, { Component, PropTypes } from 'react';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap'
const uuid = require('node-uuid');

const List = React.createClass({
  getDefaultProps: function() {
    return {
      texts: [
        {key: uuid.v1(),
        text: 'The first text'
        },
        {key: uuid.v1(),
        text: 'The second text'
        }
      ]
    };
  },

  submitFrom(textValue){
    return {
      type: 'FORM_TEXT',
      text:textValue,
      id: uuid.v1()
    }
  },

  buttonClick() {
    console.log("submit button");
    this.props.store.dispatch(this.submitFrom(this.input.value));
  },

  componentDidMount() {
    let textInput = this.props.store.getState();
    console.log("listState", textInput.formState);
  },

  render () {
    return (
      <div>
        <input
          // componentClass='input'
          // type='text'
          ref={node => {
          this.input = node;
          }}
        />
        <Button onClick={this.buttonClick}>
          myButton
        </Button>
        <p></p>
      </div>
    );
      // <form>
      //   <FormGroup>
      //     <FormControl
      //       type="text"
      //       value={this.props.formText}
      //       placeholder="Enter text"
      //       onChange={this.handleChange}
      //     >
      //     </FormControl>
      //   </FormGroup>
      // </form>
      // <ol>
      //   {/* <h1>{this.props.key}: {this.props.text}</h1> */}
      //   {texts.map((textObj) => {
      //     return (<li key={textObj.key.toString()}>{textObj.text}</li>);
      //   })}
      //
      // </ol>


  }
});

export default List;
