import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import UserService from '../UserService';

function useUserQuery() {
  const route = useRoute();
  const {id}: any = route.params;
  const navigation = useNavigation();

  const userQuery = useQuery(
    UserService.queryKeys.fetch,
    () => UserService.fetch(id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = userQuery;
  const user = UserService.extract(data);

  useLayoutEffect(() => {
    remove();
  }, [remove]);

  useEffect(() => {
    if (user?.name) {
      navigation.setOptions({headerTitle: user.name});
    }
    return () => {
      navigation.setOptions({headerTitle: ''});
    };
  }, [navigation, user?.name]);

  return {user, loading};
}

export default useUserQuery;
