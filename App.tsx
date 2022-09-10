import { Text } from "react-native";
import { Center, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store";

//Import Views
import Home from "./src/screens/Home";
import Search from "./src/screens/search";

const Views = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Views.Navigator>
            <Views.Screen
              options={{
                title: " ",
                headerShown: true,
                headerStyle: {
                  backgroundColor: "#044D65",
                },
              }}
              name="Home"
              component={Home}
            />
            <Views.Screen
              options={{
                title: "Buscar",
                headerTintColor: "#EBEBF0",
                headerStyle: {
                  backgroundColor: "#044D65",
                },
                headerShown: true,
              }}
              name="Buscar"
              component={Search}
            />
          </Views.Navigator>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
