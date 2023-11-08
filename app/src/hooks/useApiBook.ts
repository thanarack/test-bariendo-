import { useMutation } from '@tanstack/react-query';
import { postBook } from '../api';
import { useNavigate } from 'react-router-dom';

const useApiBook = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postBook,
    onSuccess: () => {
      alert('Your book time have been complete');
      navigate('/appointments');
    },
    onError: () => {
      alert('Your book time have been failed');
    },
  });
};

export default useApiBook;
