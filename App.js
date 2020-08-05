import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppContainer from "./app/containers/AppContainer";
import peopleReducer from './app/redux/reducers/peopleReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(peopleReducer);

export default class App extends Component {
  render() {
    return( 
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
