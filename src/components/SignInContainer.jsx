import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' testID='username' />
      <FormikTextInput secureTextEntry name='password' placeholder='Password' testID='password' />
      <Pressable style={styles.button} onPress={onSubmit} testID='submitButton'>
        <Text fontWeight='bold' style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignInContainer = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignInContainer;