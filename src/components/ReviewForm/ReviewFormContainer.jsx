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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is required').integer('Rating has to be a number').min(0).max(100),
  text: yup.string(),
});

const NewReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline='true' />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <NewReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default ReviewFormContainer;
