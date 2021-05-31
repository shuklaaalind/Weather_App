import React, {useMemo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {FONT_TYPES, VARIANT} from 'src/Constants/Types';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';

export interface TypographyProps extends TextProps {
  children?: any;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: number;
  variant?: VARIANT;
  color?: string;
  type?: FONT_TYPES;
  textTransform?: 'capitalize' | 'none' | 'uppercase' | 'lowercase';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
}

function Typography(props: TypographyProps) {
  const {
    textAlign,
    style,
    fontSize,
    color,
    type,
    variant,
    textTransform,
    textDecorationLine,
  } = props;
  const theme = useThemeValue();
  const {fontFamily, fontWeight} = theme.fonts[type ?? 'regular'];

  const styles = useMemo(
    () =>
      StyleSheet.create({
        typographyStyle: {
          textAlign,
          fontSize,
          color: color
            ? color
            : variant
            ? theme.colors[variant]
            : theme.colors.text,
          fontFamily,
          fontWeight,
          textTransform,
          textDecorationLine,
          textDecorationColor: color
            ? color
            : variant
            ? theme.colors[variant]
            : theme.colors.text,
        },
      }),
    [
      color,
      fontFamily,
      fontSize,
      fontWeight,
      textAlign,
      textTransform,
      theme.colors,
      variant,
      textDecorationLine,
    ],
  );

  return <Text {...props} style={[styles.typographyStyle, style]} />;
}

export default Typography;
