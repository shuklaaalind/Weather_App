import {Keyboard} from 'react-native';
import Snackbar, {SnackBarOptions} from 'react-native-snackbar';
import {ThemeAtomInstance} from 'src/Recoil/Atoms/themeAtom';

class SnackbarHandler {
  private getCurrentTheme = () => {
    return ThemeAtomInstance.fetchState();
  };

  private closeKeyboard = () => {
    Keyboard.dismiss();
  };

  errorToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();
    const theme = this.getCurrentTheme();
    Snackbar.show({
      backgroundColor: theme.colors.error,
      duration: 5000,
      ...options,
      text,
    });
  };

  successToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();
    const theme = this.getCurrentTheme();
    Snackbar.show({
      backgroundColor: theme.colors.success,
      duration: 5000,
      ...options,
      text,
    });
  };

  normalToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();
    const theme = this.getCurrentTheme();
    Snackbar.show({
      backgroundColor: theme.colors.onSurface,
      duration: 5000,
      ...options,
      text,
    });
  };
}

export default new SnackbarHandler();
