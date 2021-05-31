import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import DetailScreen from 'src/Screens/Detail/DetailScreen';
import UserScreen from 'src/Screens/User/UserScreen';
import HomeHeader from 'src/Headers/HomeHeader/HomeHeader';
import BackHeader from 'src/Headers/BackHeader/BackHeader';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator headerMode={'float'}>
      <AuthStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          header: (_) => <HomeHeader {..._} />,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
