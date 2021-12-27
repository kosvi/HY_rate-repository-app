import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [authUser, result] = useMutation(AUTHORIZE_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    try {
      const res = await authUser({ variables: { username, password } });
      await authStorage.setAccessToken(res.data.authorize.accessToken);
      apolloClient.resetStore();
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return [signIn, result];
};

export default useSignIn;