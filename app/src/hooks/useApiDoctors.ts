import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../api';

const useApiDoctors = () => {
  return useQuery({ queryKey: ['doctors'], queryFn: getDoctors, refetchInterval: 0 });
};

export default useApiDoctors;
