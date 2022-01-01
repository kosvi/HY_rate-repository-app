import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
  },
  rating: {
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
  },
  right: {
    alignSelf: 'stretch',
  },
  line: {
    margin: 4,
  },
});

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.right}>
        <Text fontWeight='bold' style={styles.line}>
          {review.user.username}
        </Text>
        <Text color='textSecondary' style={styles.line}>
          {format(parseISO(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text style={styles.line}>
          {review.text}
        </Text>
      </View>
    </View>
  );
};

export default Review;