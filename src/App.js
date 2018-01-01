import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import Chat from './components/chat';
import './App.css';

let store = createStore(rootReducer);
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
