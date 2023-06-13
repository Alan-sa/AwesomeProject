import * as React from 'react';
import NavigationScreen from './components/home/NavigationScreen';
import {Provider} from 'react-redux';
import store from './components/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
};

export default App;
