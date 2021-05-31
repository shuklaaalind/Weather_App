import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoaderModal from 'src/Modals/LoaderModal/LoaderModal';
import {useAppValue} from 'src/Recoil/Atoms/appAtom';
import AuthStackNavigator from './StackNavigators/AuthStackNavigator';
import RootStackNavigator from './StackNavigators/RootStackNavigator';

function Router() {
  const {loggedIn} = useAppValue();

  return (
    <NavigationContainer>
      {loggedIn ? <AuthStackNavigator /> : <RootStackNavigator />}
      <LoaderModal />
    </NavigationContainer>
  );
}

export default Router;
