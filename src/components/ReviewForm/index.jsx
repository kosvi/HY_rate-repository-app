import { useMutation } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router-native';
import { ADD_REVIEW } from '../../graphql/mutations';
import ReviewFormContainer from './ReviewFormContainer';

const ReviewForm = () => {

  let history = useHistory();
  const [createReview, result] = useMutation(ADD_REVIEW);

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const res = await createReview({ variables: { ownerName, repositoryName, rating: parseInt(rating), text } });
      const id = res.data.createReview.repository.id;
      history.push(`/repo/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReviewFormContainer onSubmit={onSubmit} />
  );
};

export default ReviewForm;