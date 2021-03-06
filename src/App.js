import React, { Component } from 'react';
import Wrap from './component/wrap';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrap/>
      </Provider>
    );
  }
}

export default App;
