"use client"; // This file will run on the client side

import { Provider } from 'react-redux';
import store from '@/redux/store';
export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
