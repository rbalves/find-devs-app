import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* TELAS */
import { Splash } from '../screens/splash';
import { Preload } from '../screens/preload';
import { Login } from '../screens/login';
import { Home } from '../screens/home';
import Developers from '../screens/developers';
import Profile from '../screens/profile';


const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <Navigator
                initialRouteName='Splash'
                screenOptions={{
                    headerShown:false
                }}
            >
                <Screen name="Splash" component={Splash} />
                <Screen name="Preload" component={Preload} />
                <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="Developers" component={Developers} />
                <Screen name="Profile" component={Profile} />
            </Navigator>
        </NavigationContainer>
    );
}