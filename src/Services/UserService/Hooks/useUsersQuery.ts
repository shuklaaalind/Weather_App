import {useLayoutEffect} from 'react';
import {useInfiniteQuery} from 'react-query';
import UserService from '../UserService';

function useUsersQuery() {
  const usersInfiniteQuery = useInfiniteQuery(
    UserService.queryKeys.fetchMany,
    UserService.fetchMany,
    {
      getNextPageParam: UserService.fetchManyNext,
      getPreviousPageParam: UserService.fetchManyPrevious,
    },
  );
  const {
    remove,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;
  const users = UserService.extractMany(data?.pages);

  useLayoutEffect(() => {
    remove();
  }, [remove]);

  return {
    users,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useUsersQuery;
