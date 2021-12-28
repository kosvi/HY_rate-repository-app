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

  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return <RepositoryListContainer repositories={repositoryNodes} />;
};

export default RepositoryList;