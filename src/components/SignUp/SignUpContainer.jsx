import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import * as yup from 'yup';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import { Formik } from 'formik';
import theme from '../../theme';

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
  password2: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(1, 'Must be atleast one character long').max(30, 'Can\'t be longer than 30 characters'),
  password: yup.string().required('Password is required').min(5, 'Must be atleast five characters long').max(50, 'Can\'t be longer than 50 characters'),
  password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords need to match').required('Confirm the password'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput secureTextEntry name='password' placeholder='Password' />
      <FormikTextInput secureTextEntry name='password2' placeholder='Password confirmation' />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUpContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUpContainer;
