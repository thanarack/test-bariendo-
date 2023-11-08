import { useQuery } from '@tanstack/react-query';
import { getBookListRecent } from '../api';
import { BookListRecentRequest } from '../api/api.spec';

const useApiBookRecent = (params: BookListRecentRequest) => {
  return useQuery({
    queryKey: ['doctors-book-recent'],
    queryFn: () => getBookListRecent(params),
    refetchInterval: 0,
  });
};

export default useApiBookRecent;
