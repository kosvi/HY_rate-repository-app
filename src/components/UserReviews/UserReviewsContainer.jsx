import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Review from '../Review';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.listSeparator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsContainer = ({ reviews }) => {
  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Review review={item} displayAuthor={false} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default UserReviewsContainer;