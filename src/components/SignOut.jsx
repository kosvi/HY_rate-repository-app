import React, { useEffect } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

const SignOut = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  let history = useHistory();

  useEffect(() => {
    const signOut = async () => {
      console.log('logging out');
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      console.log('logged out');
      history.push('/');
    };
    signOut();
  });

  return (
    <></>
  );
};

export default SignOut;