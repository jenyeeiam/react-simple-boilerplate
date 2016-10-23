import React, {Component} from 'react';
import { connect } from 'react-redux';
import GreenButton from './GreenButton.jsx';

let AppContainer = ({ dispatch }) => {

  return (
    <div>
      <GreenButton
      value={this.state.value}
      clickFun={this.clickFun}
      />
    </div>
  );
}

AppContainer = connect()(AddTodo);

export default AppContainer;
