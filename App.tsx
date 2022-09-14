import { Text } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Center, NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./src/store";

import { fontConfig } from "./src/styles/base";

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
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Center safeArea height="100%">
            <Text
              style={{
                fontSize: 32,
                lineHeight: 40,
                fontFamily: fontConfig.heading.bold,
              }}
            >
              Find Devs App
            </Text>
          </Center>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
