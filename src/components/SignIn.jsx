import React from 'react';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import SignInContainer from './SignInContainer';


const SignIn = () => {

  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;