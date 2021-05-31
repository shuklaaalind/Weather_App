import React from 'react';
import {useForm} from 'react-hook-form';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import Body from 'src/Components/Shared/Body/Body';
import Click from 'src/Components/Shared/Click/Click';
import Container from 'src/Components/Shared/Container/Container';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Paper from 'src/Components/Shared/Paper/Paper';

function RegisterScreen() {
  const authMutation = useAuthMutation();
  const {loading, register} = authMutation;
  const {control, formState, getValues} = useForm({
    defaultValues: {
      name: 'Test',
      email: 'eve.holt@reqres.in',
      gender: '1',
      password: '12345678',
      dob: new Date().toISOString(),
    },
    mode: 'onChange',
  });

  return (
    <Container>
      <Body>
        <Paper p={10} w100 h100 middle flex={1}>
          <FormInput
            name={'name'}
            label={'Name'}
            type={'text'}
            control={control}
            rules={{required: {value: true, message: 'Name is required'}}}
            textInputProps={{placeholder: 'Enter Name'}}
          />
          <Paper h={10} />
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
            name={'gender'}
            label={'Gender'}
            type={'select'}
            control={control}
            rules={{required: {value: true, message: 'Gender is required'}}}
            textInputProps={{placeholder: 'Select Gender'}}
            options={[
              {
                value: 1,
                label: 'Male',
              },
              {
                value: 0,
                label: 'Female',
              },
            ]}
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
          <Paper h={10} />
          <FormInput
            name={'dob'}
            label={'Date of Birth'}
            type={'date'}
            control={control}
            rules={{required: {value: true, message: 'DOB is required'}}}
            textInputProps={{
              placeholder: 'Choose DOB',
            }}
          />
          <Paper h={30} />
          <Click
            middle
            center
            onPress={() => {
              register(getValues());
            }}
            loading={loading}
            disabled={!formState.isValid || loading}
            br={5}>
            Register
          </Click>
        </Paper>
      </Body>
    </Container>
  );
}

export default RegisterScreen;
