import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_REVIEWS, GET_SINGLE_REPOSITORY } from '../../graphql/queries';
import RepositoryItemPageContainer from './RepositoryItemPageContainer';

const RepositoryItemPage = () => {

  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, { variables: { id: id }, fetchPolicy: 'cache-and-network' });
  const reviewData = useQuery(GET_REVIEWS, { variables: { id: id }, fetchPolicy: 'cache-and-network' });

  if (loading || reviewData.loading) {
    return <></>;
  }

  console.log(reviewData.data.repository.reviews);

  return <RepositoryItemPageContainer item={data.repository} reviews={reviewData.data.repository.reviews.edges} />;
};

export default RepositoryItemPage;