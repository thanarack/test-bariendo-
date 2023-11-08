import { useQuery } from '@tanstack/react-query';
import { getBookList } from '../api';
import { BookListRequest } from '../api/api.spec';

const useApiBookList = (params: BookListRequest) => {
  return useQuery({
    queryKey: ['doctors-book-list', params.doctor_id],
    queryFn: () => getBookList(params),
    refetchInterval: 0,
    enabled: !!params.doctor_id,
  });
};

export default useApiBookList;
