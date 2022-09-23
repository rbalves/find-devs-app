import React from "react";
import { NativeBaseProvider } from "native-base";
import MainStack from './src/navigators/MainStack';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Provider } from "react-redux";
import store from "./src/store";

import { fontConfig } from "./src/styles/base";

import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NativeBaseProvider>
        <Provider store={store}>
          <MainStack /> 
        </Provider>
      </NativeBaseProvider>
  );
}