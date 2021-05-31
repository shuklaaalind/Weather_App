import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useMemo} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';
import {VARIANT} from 'src/Constants/Types';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';
import Paper from '../Paper/Paper';

export type ContainerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  fullScreen?: boolean;
  variant?: VARIANT;
};

function Container(props: ContainerProps) {
  const {
    children,
    backgroundColor,
    fullScreen,
    statusBarBackgroundColor,
    statusBarStyle,
    variant,
  } = props;
  const theme = useThemeValue();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor:
            statusBarBackgroundColor ??
            (fullScreen
              ? theme.colors.transparent
              : theme.colors.adaptivePrimary),
        },
        containerStyle: {
          flex: 1,
          backgroundColor: backgroundColor
            ? backgroundColor
            : variant
            ? theme.colors[variant]
            : theme.colors.surface,
        },
      }),
    [
      statusBarBackgroundColor,
      fullScreen,
      theme.colors,
      backgroundColor,
      variant,
    ],
  );

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(fullScreen ?? false);
        StatusBar.setBackgroundColor(
          statusBarBackgroundColor ??
            (fullScreen
              ? theme.colors.transparent
              : theme.colors.adaptivePrimary),
        );
      }
      StatusBar.setBarStyle(statusBarStyle ?? 'light-content');
    }, [
      fullScreen,
      statusBarBackgroundColor,
      statusBarStyle,
      theme.colors.adaptivePrimary,
      theme.colors.transparent,
    ]),
  );

  return (
    <Paper style={styles.containerStyle}>
      <SafeAreaView style={styles.statusBarStyle} />
      <SafeAreaView style={styles.containerStyle}>{children}</SafeAreaView>
    </Paper>
  );
}

export default Container;
