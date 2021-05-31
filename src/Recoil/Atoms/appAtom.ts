import AsyncStorage from '@react-native-community/async-storage';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import RNBootSplash from 'react-native-bootsplash';

type AppState = {
  loggedIn: boolean;
  user: any;
  token: string;
};

const initialState: AppState = {
  loggedIn: false,
  user: undefined,
  token: '',
};

class AppAtom {
  private state: AppState;
  mutateState: (param: AppState | ((param: AppState) => AppState)) => void;

  constructor(_state: AppState) {
    this.state = _state;
    this.mutateState = () => {};
  }

  fetchState = () => {
    return this.state;
  };

  onLoad = ({setSelf}: any) => {
    this.mutateState = setSelf;
    (async () => {
      const token = await AsyncStorage.getItem('token');
      const userString = await AsyncStorage.getItem('user');
      if (token && userString) {
        setSelf({
          loggedIn: true,
          token,
          user: JSON.parse(userString),
        });
      }
    })();
    RNBootSplash.hide({fade: true});
  };

  onUpdate = ({onSet}: any) => {
    onSet((_state: AppState) => {
      this.state = _state;
    });
  };

  resetState = () => {
    this.mutateState(initialState);
  };
}

export const AppAtomInstance = new AppAtom(initialState);

const appAtom = atom({
  key: 'appAtom',
  default: initialState,
  effects_UNSTABLE: [AppAtomInstance.onLoad, AppAtomInstance.onUpdate],
});

export const useAppState = () => useRecoilState(appAtom);

export const useAppValue = () => useRecoilValue(appAtom);

export const useSetAppState = () => useSetRecoilState(appAtom);

export const useResetAppState = () => useResetRecoilState(appAtom);
