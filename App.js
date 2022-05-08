import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import Home from './screen/Home';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  );
}
