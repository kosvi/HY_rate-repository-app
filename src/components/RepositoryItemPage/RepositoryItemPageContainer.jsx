import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import RepoLink from './RepoLink';
import Review from './Review';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.listSeparator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItemPageContainer = ({ item, reviews }) => {
  const reviewArray = reviews.map(r => r.node);
  return (
    <View>
      <RepositoryItem item={item} />
      <RepoLink url={item.url} />
      {/* not really nice & pretty */}
      {reviewArray.length > 0 && <ItemSeparator />}
      <FlatList
        data={reviewArray}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default RepositoryItemPageContainer;