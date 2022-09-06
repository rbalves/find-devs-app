import { Text } from "react-native";

import { Center, NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Center safeArea height="100%">
          <Text style={{ fontWeight: "700", fontSize: 32, lineHeight: 40 }}>
            Find Devs App
          </Text>
        </Center>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
