import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {VARIANT} from 'src/Constants/Types';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';

interface PaperProps {
  absolute?: boolean;
  children?: any;
  center?: boolean;
  right?: boolean;
  middle?: boolean;
  bottom?: boolean;
  b?: number;
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  pv?: number;
  ph?: number;
  row?: boolean;
  flex?: number;
  w?: number;
  w100?: boolean;
  h?: number;
  h100?: boolean;
  style?: any;
  br?: number;
  borderColor?: string;
  bg?: string;
  elevation?: number;
  absBottom?: number;
  absTop?: number;
  absLeft?: number;
  absRight?: number;
  overflow?: string;
  spaced?: boolean;
  z?: number;
  flexwrap?: boolean;
  ratio?: number;
  minHeight?: number;
  maxHeight?: number;
  opacity?: number;
  variant?: VARIANT;
}

function Paper(props: PaperProps) {
  const {
    absolute,
    children,
    center,
    right,
    middle,
    bottom,
    b,
    m,
    ml,
    mr,
    mt,
    mb,
    mv,
    mh,
    p,
    pl,
    pr,
    pt,
    pb,
    pv,
    ph,
    row,
    flex,
    w,
    w100,
    h,
    h100,
    style,
    br,
    borderColor,
    bg,
    elevation = 0,
    absBottom,
    absTop,
    absLeft,
    absRight,
    overflow,
    spaced,
    z,
    flexwrap,
    ratio,
    minHeight,
    maxHeight,
    opacity,
    variant,
  } = props;
  const theme = useThemeValue();

  const iosShadowElevation = useMemo(
    () =>
      elevation === 0
        ? {}
        : {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
              height: 0.6 * elevation,
            },
          },
    [elevation],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        paperStyle: {
          flex: flex || null,
          flexWrap: flexwrap || null,
          aspectRatio: ratio || null,
          flexDirection: row ? 'row' : 'column',
          justifyContent: middle
            ? 'center'
            : bottom
            ? 'flex-end'
            : spaced
            ? 'space-between'
            : null,
          alignItems: center ? 'center' : right ? 'flex-end' : null,
          zIndex: z || null,
          position: absolute ? 'absolute' : null,
          top: absTop || null,
          bottom: absBottom || null,
          left: absLeft || null,
          right: absRight || null,
          width: w100 ? '100%' : w || null,
          height: h100 ? '100%' : h || null,
          minHeight: minHeight || null,
          maxHeight: maxHeight || null,
          backgroundColor: bg
            ? bg
            : variant
            ? theme.colors[variant]
            : 'transparent',
          overflow: overflow || null,
          opacity: opacity || null,
          borderWidth: b || null,
          borderRadius: br || null,
          borderColor: borderColor || 'grey',
          elevation: elevation || null,
          margin: m || null,
          marginLeft: ml || null,
          marginTop: mt || null,
          marginBottom: mb || null,
          marginRight: mr || null,
          marginVertical: mv || null,
          marginHorizontal: mh || null,
          padding: p || null,
          paddingLeft: pl || null,
          paddingRight: pr || null,
          paddingTop: pt || null,
          paddingBottom: pb || null,
          paddingHorizontal: ph || null,
          paddingVertical: pv || null,
          ...iosShadowElevation,
          ...style,
        },
      }),
    [
      absBottom,
      absLeft,
      absRight,
      absTop,
      absolute,
      b,
      bg,
      borderColor,
      bottom,
      br,
      center,
      elevation,
      flex,
      flexwrap,
      h,
      h100,
      iosShadowElevation,
      m,
      maxHeight,
      mb,
      mh,
      middle,
      minHeight,
      ml,
      mr,
      mt,
      mv,
      opacity,
      overflow,
      p,
      pb,
      ph,
      pl,
      pr,
      pt,
      pv,
      ratio,
      right,
      row,
      spaced,
      style,
      theme.colors,
      variant,
      w,
      w100,
      z,
    ],
  );

  return <View style={styles.paperStyle}>{children}</View>;
}

export default Paper;
