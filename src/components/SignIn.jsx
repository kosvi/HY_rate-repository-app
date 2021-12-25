import React from 'react';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: theme.margins.formInput,
    padding: theme.paddings.formInput,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    textAlign: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput secureTextEntry name='password' placeholder='Password' />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;