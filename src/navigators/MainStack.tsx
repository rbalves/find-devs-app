import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Developers from "../screens/developers";
import { Home } from "../screens/home";
import { Login } from "../screens/login/";
import { Preload } from "../screens/preload";
import Profile from "../screens/profile";
import Search from "../screens/search";
import { SignUp } from "../screens/signup";
import { Splash } from "../screens/splash";

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Splash" component={Splash} />
        <Screen name="Preload" component={Preload} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="Developers" component={Developers} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Search" component={Search} />
      </Navigator>
    </NavigationContainer>
  );
}
