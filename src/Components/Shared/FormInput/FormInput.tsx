import React, {Fragment} from 'react';
import {Control, RegisterOptions, useController} from 'react-hook-form';
import {TextInputProps, View} from 'react-native';
import {ReactNativeModalDateTimePickerProps} from 'react-native-modal-datetime-picker';
import InputDate from 'src/Components/Custom/InputDate/InputDate';
import InputSelect from 'src/Components/Custom/InputSelect/InputSelect';
import InputText from 'src/Components/Custom/InputText/InputText';
import {INPUT_TYPES, SELECT_OPTIONS} from 'src/Constants/Types';
import IconButton from '../IconButton/IconButton';
import Paper from '../Paper/Paper';

export type FormInputProps = {
  name: string;
  label?: string;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  shouldUnregister?: boolean;
  defaultValue?: unknown;
  control?: Control<any>;
  type: INPUT_TYPES;
  textInputProps?: TextInputProps;
  left?: any;
  right?: any;
  options?: SELECT_OPTIONS;
  JSX?: (_props: Omit<FormInputProps, 'JSX'>) => any;
  datePickerProps?: Omit<
    ReactNativeModalDateTimePickerProps,
    'onConfirm' | 'onCancel'
  >;
};

function FormInput(props: FormInputProps) {
  const {
    name,
    label,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    type,
    textInputProps,
    left,
    right,
    options,
    JSX,
    datePickerProps,
  } = props;
  const {field, formState} = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  switch (type) {
    case 'text': {
      return (
        <InputText
          label={label}
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          left={left}
          right={right}
        />
      );
    }
    case 'email': {
      return (
        <InputText
          label={label}
          field={field}
          formState={formState}
          textInputProps={{
            ...textInputProps,
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          }}
          left={left}
          right={right}
        />
      );
    }
    case 'password': {
      return (
        <InputText
          label={label}
          field={field}
          formState={formState}
          textInputProps={{
            ...textInputProps,
            secureTextEntry: true,
          }}
          left={left}
          right={right}
        />
      );
    }
    case 'select': {
      return (
        <Fragment>
          {options && (
            <InputSelect
              label={label}
              field={field}
              formState={formState}
              textInputProps={textInputProps}
              left={left}
              right={
                right ?? (
                  <Paper middle>
                    <View pointerEvents={'none'}>
                      <IconButton name={'menu-down'} variant={'text'} />
                    </View>
                  </Paper>
                )
              }
              options={options}
            />
          )}
        </Fragment>
      );
    }
    case 'date': {
      return (
        <InputDate
          label={label}
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          right={right}
          left={
            left ?? (
              <Paper middle>
                <View pointerEvents={'none'}>
                  <IconButton name={'calendar'} variant={'text'} />
                </View>
              </Paper>
            )
          }
          datePickerProps={datePickerProps}
        />
      );
    }
    case 'custom': {
      return JSX && JSX(props);
    }
  }
}

export default FormInput;
