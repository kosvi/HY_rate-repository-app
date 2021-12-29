import React from 'react';
// import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {

  const { data, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });

  if (loading) {
    return <></>;
  }

  return <RepositoryListContainer repositories={data.repositories} />;
};

export default RepositoryList;