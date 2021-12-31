import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_SINGLE_REPOSITORY } from '../../graphql/queries';
import RepositoryItemPageContainer from './RepositoryItemPageContainer';

const RepositoryItemPage = () => {

  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, { variables: { id: id }, fetchPolicy: 'cache-and-network' });

  if (loading) {
    return <></>;
  }

  return <RepositoryItemPageContainer item={data.repository} />;
};

export default RepositoryItemPage;