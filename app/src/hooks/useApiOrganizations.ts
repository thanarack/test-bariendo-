import { useQuery } from '@tanstack/react-query';
import { getOrganizations } from '../api';

const useApiOrganizations = () => {
  return useQuery({ queryKey: ['organizations'], queryFn: getOrganizations });
};

export default useApiOrganizations;
