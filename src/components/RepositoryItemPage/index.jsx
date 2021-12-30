import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../../graphql/queries';
import RepositoryItemPageContainer from './RepositoryItemPageContainer';

const RepositoryItemPage = () => {

  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, { variables: { id: 'zeit.swr' }, fetchPolicy: 'cache-and-network' });

  if (loading) {
    return <></>;
  }

  return <RepositoryItemPageContainer item={data.repository} />;
};

export default RepositoryItemPage;