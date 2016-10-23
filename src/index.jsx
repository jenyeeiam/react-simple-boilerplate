// Application entrypoint.
// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import bananas from './reducers/bananas.js';
import form from './reducers/form.jsx';
//import App from './App.jsx';

//////////////
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers.js';
import App from './components/App.js';

let store = createStore(todoApp);
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch(addTodo('Learn some redux'));


var reducers = combineReducers({
  bananaState: bananas,
  // formState: form
});


store.subscribe(() => {
  console.log(store.getState());
});


//var store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
