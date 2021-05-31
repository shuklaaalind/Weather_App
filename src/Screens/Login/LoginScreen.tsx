import React from 'react';
import {useForm} from 'react-hook-form';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import Body from 'src/Components/Shared/Body/Body';
import Click from 'src/Components/Shared/Click/Click';
import Container from 'src/Components/Shared/Container/Container';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Paper from 'src/Components/Shared/Paper/Paper';
import {useNavigation} from '@react-navigation/core';
import {Image, StyleSheet} from 'react-native';
import Typography from 'src/Components/Shared/Typography/Typography';

function LoginScreen() {
  const authMutation = useAuthMutation();
  const {loading, login} = authMutation;
  const {control, formState, getValues} = useForm({
    defaultValues: {
      email: 'shuklaaalind@gmail.com',
      password: '12345678',
    },
    mode: 'onChange',
  });

  return (
    <Container statusBarBackgroundColor="black">
      <Paper p={10} w100 h100 middle flex={1} variant={'black'}>
        <Paper w100 pv={20} center>
          <Typography fontSize={30} color={'white'}>
            Weather App
          </Typography>
        </Paper>
        <Paper w100 center>
          <Image
            source={require('src/Assets/images/appicon.png')}
            style={styles.logo}
          />
        </Paper>
        <FormInput
          name={'email'}
          label={'Email'}
          type={'email'}
          control={control}
          rules={{required: {value: true, message: 'Email is required'}}}
          textInputProps={{placeholder: 'Enter Email'}}
        />
        <Paper h={10} />
        <FormInput
          name={'password'}
          label={'Password'}
          type={'text'}
          control={control}
          rules={{required: {value: true, message: 'Password is required'}}}
          textInputProps={{
            placeholder: 'Enter Password',
            secureTextEntry: true,
          }}
        />
        <Paper h={30} />
        <Paper w100 middle center>
          <Click
            middle
            center
            variant={'white'}
            onPress={() => {
              login(getValues());
            }}
            br={25}
            w={'60%'}>
            <Typography fontSize={30} color={'black'}>
              Login
            </Typography>
          </Click>
        </Paper>
        <Paper h={80} />
        <Paper w100 pv={20} center>
          <Typography fontSize={10} color={'white'}>
            Submitted By: Aalind Shukla
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
  },
});

export default LoginScreen;
