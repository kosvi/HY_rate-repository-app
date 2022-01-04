import React, { useState } from 'react';
// import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useHistory } from 'react-router-native';

const RepositoryList = () => {

  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [direction, setDirection] = useState('DESC');
  const { data, loading } = useQuery(GET_REPOSITORIES, { variables: { orderBy: orderBy, orderDirection: direction }, fetchPolicy: 'cache-and-network' });
  const [pickerSelection, setPickerSelection] = useState('1');
  let history = useHistory();

  if (loading) {
    return <></>;
  }

  return <RepositoryListContainer repositories={data.repositories} history={history} toPicker={{ setOrderBy, setDirection, setPickerSelection, pickerSelection }} />;
};

export default RepositoryList;