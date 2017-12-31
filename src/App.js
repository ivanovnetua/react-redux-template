import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers/main';
import UserList from './components/user-list';

let store = createStore(AppReducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>Hello World</h1>
          <UserList></UserList>
        </div>
      </Provider>
    );
  }
}

export default App;
