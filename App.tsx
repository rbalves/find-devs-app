import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Views
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

const Views = createNativeStackNavigator();

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
<<<<<<< HEAD
        <Views.Navigator>
          <Views.Screen name="Home" component={Home} />
          <Views.Screen name="Buscar" component={Search} />
        </Views.Navigator>
=======
        <Provider store={store}>
          <Center safeArea height="100%">
            <Text style={{ fontWeight: "700", fontSize: 32, lineHeight: 40 }}>
              Find Devs App
            </Text>
          </Center>
        </Provider>
>>>>>>> main
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
