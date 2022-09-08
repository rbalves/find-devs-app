import { Text } from "react-native";

import { Center, NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Center safeArea height="100%">
            <Text style={{ fontWeight: "700", fontSize: 32, lineHeight: 40 }}>
              Find Devs App
            </Text>
          </Center>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
