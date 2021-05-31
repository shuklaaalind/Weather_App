export type THEME_TYPE = {
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    error: string;
    text: string;
    onSurface: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
    white: string;
    black: string;
    success: string;
    transparent: string;
    adaptivePrimary: string;
    divider: string;
  };
  fonts: {
    light: {
      fontFamily: 'System';
      fontWeight: '300';
    };
    regular: {
      fontFamily: 'System';
      fontWeight: '400';
    };
    medium: {
      fontFamily: 'System';
      fontWeight: '500';
    };
    bold: {
      fontFamily: 'System';
      fontWeight: '700';
    };
  };
};

export type VARIANT =
  | 'primary'
  | 'background'
  | 'surface'
  | 'accent'
  | 'error'
  | 'text'
  | 'onSurface'
  | 'disabled'
  | 'placeholder'
  | 'backdrop'
  | 'notification'
  | 'white'
  | 'black'
  | 'success'
  | 'transparent'
  | 'adaptivePrimary'
  | 'divider';

export type INPUT_TYPES =
  | 'text'
  | 'email'
  | 'password'
  | 'select'
  | 'date'
  | 'custom';

export type FONT_TYPES = 'light' | 'regular' | 'medium' | 'bold';

export type SELECT_OPTIONS = Array<{label: string; value: string | number}>;
