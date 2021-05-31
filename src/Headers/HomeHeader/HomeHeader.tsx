import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import IconButton from 'src/Components/Shared/IconButton/IconButton';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {Alert} from 'react-native';
import {th} from 'src/Screens/Home/HomeScreen';

function HomeHeader(props: StackHeaderProps) {
  const {navigation} = props;
  const authMutation = useAuthMutation();
  const {logout} = authMutation;
  const insets = useSafeAreaInsets();

  return (
    <Paper bg={'black'}>
      <Paper h={insets.top} />
      <Paper ph={15} row h={50}>
      <Paper flex={1} />
        <Paper flex={8} middle center>
          <Typography fontSize={20} variant={'white'}>
            Weather App
          </Typography>
        </Paper>
        <Paper middle flex={1}>
          <IconButton
            color={'white'}
            name={'logout'}
            onPress={() =>
              Alert.alert('Logout', 'Are you sure?', [
                {
                  text: 'Yes',
                  style: 'destructive',
                  onPress: logout,
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ])
            }
          />
        </Paper>
      </Paper>
    </Paper>
  );
}

export default HomeHeader;
