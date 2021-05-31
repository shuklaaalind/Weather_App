import {AppState} from 'react-native';
import {focusManager, QueryClient} from 'react-query';
import {onError} from 'src/Helpers';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError,
      onSuccess: console.log,
    },
    mutations: {
      onError,
      onSuccess: console.log,
    },
  },
});

focusManager.setEventListener((handleFocus: any) => {
  AppState.addEventListener('change', handleFocus);
  return () => {
    AppState.removeEventListener('change', handleFocus);
  };
});
