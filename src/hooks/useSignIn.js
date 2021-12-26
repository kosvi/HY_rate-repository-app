import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
  const [authUser, result] = useMutation(AUTHORIZE_USER);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const res = await authUser({ variables: { username, password } });
    return res;
  };

  return [signIn, result];
};

export default useSignIn;