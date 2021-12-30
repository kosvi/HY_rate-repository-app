import React from 'react';
import { View } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import RepoLink from './RepoLink';

const RepositoryItemPageContainer = ({ item }) => {
  return (
    <View>
      <RepositoryItem item={item} />
      <RepoLink url={item.url} />
    </View>
  );
};

export default RepositoryItemPageContainer;