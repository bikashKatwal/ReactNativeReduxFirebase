import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Router from './Router';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCI2XabN6QHUivJSviDcA-Z20w1tsz5s40',
      authDomain: 'manager-81185.firebaseapp.com',
      databaseURL: 'https://manager-81185.firebaseio.com',
      projectId: 'manager-81185',
      storageBucket: 'manager-81185.appspot.com',
      messagingSenderId: '971595824098'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
       <Router />
      </Provider>
    );
  }
}

export default App;
