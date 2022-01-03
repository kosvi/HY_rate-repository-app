import { useMutation } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router-native';
import { ADD_USER } from '../../graphql/mutations';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {

  let history = useHistory();
  const [addUser] = useMutation(ADD_USER);
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const result = await addUser({ variables: { username, password } });
      console.log(result);
      if (result.data.createUser.username && result.data.createUser.username === username) {
        await signIn({ username, password });
      }
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;
