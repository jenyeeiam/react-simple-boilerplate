import React, {Component} from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'

const GreenButton = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'Green Button'
    };
  },

  render () {
    const { store } = this.context;
    // const { clickFun, value } = this.props;
    console.log("thisprops", store);
    return (
      <ButtonToolbar>
        <Button
        active
        bsStyle='success'
        onClick={this.props.clickFun}
        >{this.props.value}
        </Button>
      </ButtonToolbar>
    );
  }
});
GreenButton.contextTypes = {
  store: React.Proptypes.object
};

export default GreenButton;
