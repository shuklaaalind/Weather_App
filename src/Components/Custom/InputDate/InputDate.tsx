import React, {Fragment, useMemo, useState} from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';
import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker';
import moment from 'moment';

type InputDateProps = {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  formState: UseFormStateReturn<FieldValues>;
  textInputProps?: TextInputProps;
  left?: any;
  right?: any;
  datePickerProps?: Omit<
    ReactNativeModalDateTimePickerProps,
    'onConfirm' | 'onCancel'
  >;
};

function InputDate(props: InputDateProps) {
  const {
    formState,
    field,
    textInputProps,
    label,
    left,
    right,
    datePickerProps,
  } = props;
  const theme = useThemeValue();
  const errorMessage = formState.errors?.[field.name]?.message;
  const [focus, setFocus] = useState(false);
  const borderColor = errorMessage
    ? theme.colors.error
    : focus
    ? theme.colors.primary
    : theme.colors.placeholder;
  const labelColor = errorMessage
    ? theme.colors.error
    : focus
    ? theme.colors.primary
    : theme.colors.placeholder;
  const textColor = errorMessage ? theme.colors.error : theme.colors.text;
  const borderWidth = focus || errorMessage ? 2 : 1;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        textInputStyle: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingBottom: Platform.OS === 'ios' ? 8.3 / 2 : 0,
          paddingVertical: Platform.OS === 'ios' ? 8.3 / 2 : 0,
          color: textColor,
          textAlignVertical: 'center',
        },
      }),
    [textColor],
  );

  return (
    <Fragment>
      {label && (
        <Fragment>
          <Typography type={'medium'} fontSize={16} color={labelColor}>
            {label}
          </Typography>
          <Paper h={8} />
        </Fragment>
      )}

      <Ripple onPress={() => setDatePickerVisibility(true)}>
        <View pointerEvents={'none'}>
          <Paper
            row
            b={borderWidth}
            borderColor={borderColor}
            br={2}
            overflow="hidden">
            {left}
            <Paper pv={8} flex={1} middle>
              <TextInput
                {...textInputProps}
                value={field.value ? moment(field.value).format('LL') : ''}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholderTextColor={theme.colors.placeholder}
                style={[styles.textInputStyle, textInputProps?.style]}
              />
            </Paper>
            {right}
          </Paper>
        </View>
      </Ripple>

      {errorMessage && (
        <Typography fontSize={12} color={borderColor}>
          {errorMessage}
        </Typography>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={field.value ? new Date(field.value) : undefined}
        onConfirm={(date) => {
          setDatePickerVisibility(false);
          field.onChange(date);
        }}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
        {...datePickerProps}
      />
    </Fragment>
  );
}

export default InputDate;
