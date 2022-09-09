import React from "react";
import { NativeBaseProvider } from "native-base";
import MainStack from './src/navigators/MainStack';


export default function App() {
  return (
      <NativeBaseProvider>
        <MainStack /> 
      </NativeBaseProvider>
  );
}
