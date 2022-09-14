import React from "react";
import { NativeBaseProvider } from "native-base";
import MainStack from './src/navigators/MainStack';

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
      <NativeBaseProvider>
        <Provider store={store}>
          <MainStack /> 
        </Provider>
      </NativeBaseProvider>
  );
}