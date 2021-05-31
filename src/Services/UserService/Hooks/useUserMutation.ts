import {useMutation} from 'react-query';
import UserService from '../UserService';

function useUserMutation() {
  const userAddMutation = useMutation(UserService.add);

  return {
    add: userAddMutation.mutate,
    loading: userAddMutation.isLoading,
  };
}

export default useUserMutation;
