import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import Navigation from './Navigation';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}
