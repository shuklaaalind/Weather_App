import {useCallback} from 'react';
import {useMutation} from 'react-query';
import AuthService from '../AuthService';

function useAuthMutation() {
  const loginMutation = useMutation(AuthService.login, {
    onSuccess: AuthService.onSuccessLogin,
  });

  const registerMutation = useMutation(AuthService.register, {
    onSuccess: AuthService.onSuccessLogin,
  });

  const logout = useCallback(() => {
    AuthService.logout();
  }, []);

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    loading: loginMutation.isLoading || registerMutation.isLoading,
  };
}

export default useAuthMutation;
