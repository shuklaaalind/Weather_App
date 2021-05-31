import {THEME_TYPE} from './Types';

export const DayTheme: THEME_TYPE = {
  colors: {
    primary: 'black',
    accent: '#03dac4',
    background: '#F4F2F0',
    surface: '#ffffff',
    error: '#B00020',
    text: '#000000',
    onSurface: '#000000',
    disabled: 'rgba(0,0,0,0.26)',
    placeholder: 'rgba(0,0,0,0.54)',
    backdrop: 'rgba(0,0,0,0.5)',
    notification: '#ec407a',
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    transparent: 'transparent',
    adaptivePrimary: '#6200ee',
    divider: 'rgba(0,0,0,0.26)',
  },
  fonts: {
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
  },
};

export const NightTheme: THEME_TYPE = {
  colors: {
    primary: '#black',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onSurface: '#FFFFFF',
    text: '#FFFFFF',
    disabled: 'rgba(255,255,255,0.38)',
    placeholder: 'rgba(255,255,255,0.54)',
    backdrop: 'rgba(255,255,255,0.5)',
    notification: '#f8bbd0',
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    transparent: 'transparent',
    adaptivePrimary: '#121212',
    divider: 'rgba(255,255,255,0.38)',
  },
  fonts: {
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
  },
};
