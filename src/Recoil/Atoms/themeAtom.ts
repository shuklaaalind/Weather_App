import {Appearance} from 'react-native';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {DayTheme, NightTheme} from 'src/Constants/Theme';

class ThemeAtom {
  state: typeof DayTheme;

  constructor(_state: typeof DayTheme) {
    this.state = _state;
  }

  onLoad = ({setSelf}: any) => {
    const mode = Appearance.getColorScheme();
    setSelf(mode === 'dark' ? NightTheme : DayTheme);
  };

  onUpdate = ({onSet}: any) => {
    onSet((_state: typeof DayTheme) => {
      this.state = _state;
    });
  };

  fetchState = () => {
    return this.state;
  };
}

export const ThemeAtomInstance = new ThemeAtom(DayTheme);

const themeAtom = atom({
  key: 'themeAtom',
  default: DayTheme,
  effects_UNSTABLE: [ThemeAtomInstance.onLoad],
});

export const useThemeValue = () => useRecoilValue(themeAtom);

export const useSetThemeState = () => useSetRecoilState(themeAtom);
