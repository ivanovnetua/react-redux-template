import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import Chat from './components/chat';
import rootMiddleware from './middlewares/root-middleware';
import './App.css';

let store = createStore(rootReducer, applyMiddleware(rootMiddleware));

window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Chat></Chat>
        </div>
      </Provider>
    );
  }
}

export default App;
