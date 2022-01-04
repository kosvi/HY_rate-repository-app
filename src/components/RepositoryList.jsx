import React, { useState } from 'react';
// import useRepositories from '../hooks/useRepositories';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { RepositoryListContainer } from './RepositoryListContainer';
import { Picker } from '@react-native-picker/picker';
import { useHistory } from 'react-router-native';

const SortPicker = ({ setOrder, setDirection, setPickerSelection, selection }) => {

  return (
    <Picker
      style={{ padding: 10 }}
      selectedValue={selection}
      onValueChange={(itemValue) => {
        switch (itemValue) {
          case '1':
            setOrder('CREATED_AT');
            setDirection('DESC');
            break;
          case '2':
            setOrder('RATING_AVERAGE');
            setDirection('DESC');
            setPickerSelection(itemValue);
            break;
          case '3':
            setOrder('RATING_AVERAGE');
            setDirection('ASC');
            break;
          default:
            break;
        }
      }}>
      <Picker.Item label='Latest repositories' value='1' />
      <Picker.Item label='Highest rated repositories' value='2' />
      <Picker.Item label='Lowest rated repositories' value='3' />
    </Picker>
  );
};

const RepositoryList = () => {

  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [direction, setDirection] = useState('DESC');
  const { data, loading } = useQuery(GET_REPOSITORIES, { variables: { orderBy: orderBy, orderDirection: direction }, fetchPolicy: 'cache-and-network' });
  const [pickerSelection, setPickerSelection] = useState();
  let history = useHistory();

  if (loading) {
    return <></>;
  }

  return (
    <View>
      <SortPicker setOrder={setOrderBy} setDirection={setDirection} setPickerSelection={setPickerSelection} selection={pickerSelection} />
      <RepositoryListContainer repositories={data.repositories} history={history} />
    </View>
  );
};

export default RepositoryList;