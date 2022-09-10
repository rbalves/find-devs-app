import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Views
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

const Views = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Views.Navigator>
          <Views.Screen name="Home" component={Home} />
          <Views.Screen name="Buscar" component={Search} />
        </Views.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
