import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
// import { useQuery } from '@apollo/client';
// import { GET_REPOSITORIES } from '../graphql/queries';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce/lib';

const RepositoryList = () => {

  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [direction, setDirection] = useState('DESC');
  const [pickerSelection, setPickerSelection] = useState('1');
  const [filterString, setFilterString] = useState('');
  const [filterStringDebounce] = useDebounce(filterString, 500);
  //  const { data, loading } = useQuery(GET_REPOSITORIES, { variables: { orderBy: orderBy, orderDirection: direction, key: filterStringDebounce }, fetchPolicy: 'cache-and-network' });
  const { repositories, fetchMore, loading } = useRepositories({
    first: 4,
    orderBy: orderBy,
    orderDirection: direction,
    key: filterStringDebounce
  });
  let history = useHistory();

  if (loading) {
    return <></>;
  }

  const onEndReach = () => {
    console.log('Reached the end of list');
    fetchMore();
  };

  return <RepositoryListContainer repositories={repositories} history={history} toHeader={{ setOrderBy, setDirection, setPickerSelection, pickerSelection, setFilterString, filterString }} onEndReach={onEndReach} />;
};

export default RepositoryList;