import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../drone_ui/src/app/store';
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

