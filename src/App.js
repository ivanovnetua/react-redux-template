import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import UserList from './components/user-list';

let store = createStore(rootReducer);
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>Users list</h1>
          <UserList></UserList>
        </div>
      </Provider>
    );
  }
}

export default App;
