import React, {Fragment, useCallback, useMemo, useRef, useState} from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import {
  LayoutChangeEvent,
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
import Menu, {MenuDivider, MenuItem} from 'react-native-material-menu';
import {SELECT_OPTIONS} from 'src/Constants/Types';

type InputSelectProps = {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  formState: UseFormStateReturn<FieldValues>;
  textInputProps?: TextInputProps;
  left?: any;
  right?: any;
  options: SELECT_OPTIONS;
};

function InputSelect(props: InputSelectProps) {
  const {formState, field, textInputProps, label, left, right, options} = props;
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
  const menuRef = useRef<any>();
  const [width, setWidth] = useState(0);

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
        menuStyle: {
          minWidth: width,
          width: width,
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.text,
        },
      }),
    [textColor, theme.colors.surface, theme.colors.text, width],
  );

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const {width: _width} = event.nativeEvent.layout;
    setWidth(_width);
  }, []);

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

      <Menu
        ref={menuRef}
        style={styles.menuStyle}
        button={
          <Ripple onPress={() => menuRef.current?.show()}>
            <View pointerEvents={'none'} onLayout={onLayout}>
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
                    value={
                      options.find(({value}) => `${value}` === `${field.value}`)
                        ?.label
                    }
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
        }>
        {options.map(({label: _label, value: _value}, _index) => {
          return (
            <Fragment key={_value}>
              <MenuItem
                style={{width, minWidth: width, maxWidth: width}}
                onPress={() => {
                  field.onChange(`${_value}`);
                  menuRef.current?.hide();
                }}
                textStyle={{
                  color:
                    `${_value}` === `${field.value}`
                      ? theme.colors.primary
                      : theme.colors.text,
                }}>
                {_label}
              </MenuItem>
              {_index < options.length - 1 && (
                <MenuDivider color={theme.colors.divider} />
              )}
            </Fragment>
          );
        })}
      </Menu>
      {errorMessage && (
        <Typography fontSize={12} color={borderColor}>
          {errorMessage}
        </Typography>
      )}
    </Fragment>
  );
}

export default InputSelect;
