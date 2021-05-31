import AsyncStorage from '@react-native-community/async-storage';
import {AxiosResponse} from 'axios';
import {queryClient} from 'src/Constants/Config';
import {fetcher} from 'src/Helpers';
import {AppAtomInstance} from 'src/Recoil/Atoms/appAtom';
import SnackbarHandler from 'src/Utils/Shared/SnackbarHandler';

class AuthService {
  queryKeys = {};

  login = (data: any) => {
    console.log({data});
    return fetcher({
      url: '/users/1',
    });
  };

  register = (data: any) => {
    console.log({data});
    return fetcher({
      url: '/users/1',
    });
  };

  onSuccessLogin = (responseData: AxiosResponse<any>) => {
    queryClient.clear();
    if (responseData) {
      const {status, data} = responseData;
      if (status === 200) {
        SnackbarHandler.successToast('Logged in successfully');
        AppAtomInstance.mutateState({
          loggedIn: true,
          user: data,
          token: data?.token,
        });
        AsyncStorage.setItem('user', JSON.stringify(data));
        AsyncStorage.setItem('token', data?.token);
      }
    }
  };

  logout = () => {
    AppAtomInstance.resetState();
    AsyncStorage.multiRemove(['user', 'token']);
  };
}

export default new AuthService();
