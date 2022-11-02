import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-Stack';

export type LoginStackScreens = {
  Enter: undefined;
  Login: undefined;
};

const LoginStack = createNativeStackNavigator<LoginStackScreens>();

export type HomeStackScreens = {
  Tabs: undefined;
  UserSetting: undefined;
  Settings: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackScreens>();

// export function RootStack() {
//   const [isLogged, setIsLogged] = useState(false);
//   {
//     !isLogged ?
//     <LoginStack.Navigator>
//         <LoginStack.Screen />
//     </LoginStack.Navigator>
//     :
//     <HomeStack.Navigator>
//         <HomeStack.Screen />
//     </HomeStack.Navigator>
//   }
// }
