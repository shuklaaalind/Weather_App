import AsyncStorage from '@react-native-community/async-storage';
import Axios, {AxiosRequestConfig} from 'axios';
import UltimateConfig from 'react-native-ultimate-config';
import {AppAtomInstance} from 'src/Recoil/Atoms/appAtom';

export const fetcher = async (config: AxiosRequestConfig) => {
  const {url, method, data, headers} = config;
  const {token} = AppAtomInstance.fetchState();
  return await Axios.request({
    baseURL: UltimateConfig.API_URL,
    url,
    method: method ?? 'GET',
    data,
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
      ...config?.headers,
      ...headers,
    },
  });
};

export const onError = (error: any) => {
  if (error?.response) {
    console.log({error: error?.response});
    if (error?.response?.status === 401) {
      AppAtomInstance.resetState();
      try {
        AsyncStorage.clear();
      } catch (_error) {}
    }
  } else {
  }
};
