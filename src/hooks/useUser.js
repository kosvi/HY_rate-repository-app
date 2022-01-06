import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useUser = (variables) => {
  const { data, loading } = useQuery(GET_USER, { variables, fetchPolicy: 'cache-and-network' });

  return { data, loading };
};

export default useUser;