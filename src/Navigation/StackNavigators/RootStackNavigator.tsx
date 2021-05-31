import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/Screens/Login/LoginScreen';
import RegisterScreen from 'src/Screens/Register/RegisterScreen';
import BackHeader from 'src/Headers/BackHeader/BackHeader';
import BaseHeader from 'src/Headers/BaseHeader/BaseHeader';
const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator headerMode={'float'}>
      <RootStack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      {/* <RootStack.Screen
        name={'Register'}
        component={RegisterScreen}
        options={{
          header: (_) => <BackHeader {..._} />,
          headerTitle: 'Register',
        }}
      /> */}
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
