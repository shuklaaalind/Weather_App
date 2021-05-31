import {USER} from 'src/Constants/ResponseTypes';
import {fetcher} from 'src/Helpers';

class UserService {
  queryKeys = {
    fetch: 'fetch',
    fetchMany: 'fetchMany',
  };

  fetch = async (userId: string) => {
    return fetcher({
      url: '/users/' + userId,
    });
  };

  fetchMany = async ({pageParam = 1}) => {
    return fetcher({
      url: '/users?limit=10&page=' + pageParam,
    });
  };

  extract = (responseData: any): USER => {
    return responseData?.data;
  };

  extractMany = (pages: Array<any> = []): Array<USER> => {
    return pages.map((_) => _.data).reduce((a, b) => a.concat(b), []);
  };

  fetchManyNext = (lastPage: any) => {
    const page = parseInt(
      lastPage.config.url.substr(lastPage.config.url.length - 1),
      10,
    );
    const nextPage = page + 1;
    const totalPages = 10;
    if (totalPages > nextPage) {
      return page + 1;
    }
  };

  fetchManyPrevious = (lastPage: any) => {
    const page = parseInt(
      lastPage.config.url.substr(lastPage.config.url.length - 1),
      10,
    );
    const previousPage = page - 1;
    if (previousPage > 1) {
      return page - 1;
    }
  };

  add = (data: any) => {
    return fetcher({
      url: '/users',
      data,
      method: 'POST',
    });
  };
}

export default new UserService();
