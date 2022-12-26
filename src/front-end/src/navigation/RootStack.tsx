import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens';
import {Dashboard, Demo} from '../screens/home-screen';

export type LoginStackScreens = {
  auth: undefined;
};

const LoginStack = createNativeStackNavigator<LoginStackScreens>();

export type HomeStackScreens = {
  dashboard: undefined;
  demo: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackScreens>();

export function RootStack() {
  const [isLogged, setIsLogged] = useState(false);
  return !isLogged ? (
    <LoginStack.Navigator initialRouteName="auth">
      <LoginStack.Screen
        name="auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  ) : (
    <HomeStack.Navigator initialRouteName="dashboard">
      <HomeStack.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="demo"
        component={Demo}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}
