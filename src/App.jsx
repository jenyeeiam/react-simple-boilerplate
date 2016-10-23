import React, {Component} from 'react';
import GreenButton from './GreenButton.jsx'
import List from './List.jsx'

const App = React.createClass ({

  getInitialState() {
    return {
      value: "Green Button",
      formText: ""
    }
  },

  componentWillMount() {
    console.log(store.getState());
  },

  componentDidMount() {

    store.subscribe(this.stateChanged);
  },


  stateChanged() {
    this.setState({value: store.getState()});
  },

  clickFun() {
    // console.log(this.state);
    store.dispatch({type: 'BANANAS'});
    if (this.state.value === 'I love BANANAS') {
      store.dispatch({type: 'ORANGES'});
    }
  },

  render() {
    const { store } = this.context;
    return (
      <div>
        <GreenButton
        value={this.state.value}
        clickFun={this.clickFun}
        />
        {/* <List
        // this is my object error
          // store={this.props.store}
          formText={this.state.formText}
          // stateChanged={this.stateChanged}
        /> */}
      </div>
    );
  }
});
App.contextTypes = {
  store: React.Proptypes.object
};

export default App;
