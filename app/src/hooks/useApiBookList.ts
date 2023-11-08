import { useQuery } from '@tanstack/react-query';
import { getBookList } from '../api';

const useApiBookList = () => {
  return useQuery({
    queryKey: ['doctors-book-list'],
    queryFn: getBookList,
    refetchInterval: 0,
  });
};

export default useApiBookList;
