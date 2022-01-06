import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import Text from './Text';
import theme from '../theme';
import { useHistory } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_USER } from '../graphql/queries';

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
  viewButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 5,
    borderRadius: 3,
    textAlign: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: theme.colors.error,
    margin: 10,
    padding: 5,
    borderRadius: 3,
    textAlign: 'center',
  },
});

const Buttons = ({ review, history }) => {

  const [deleteReview] = useMutation(DELETE_REVIEW, { refetchQueries: [{ query: GET_USER }] });

  const viewRepo = () => {
    history.push(`/repo/${review.repositoryId}`);
  };

  const deleteReviewById = () => {
    console.log('delete', review.repositoryId);
    try {
      deleteReview({ variables: { reviewId: review.id } });
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = () => {
    (Alert.alert('Delere review', 'Are you sure?', [{ text: 'Cancel', onPress: () => console.log('cancel') }, { text: 'OK', onPress: deleteReviewById }]));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.viewButton} onPress={viewRepo}>
        <Text fontWeight='bold' color='white' >View repository</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={confirmDelete}>
        <Text fontWeight='bold' color='white' >Delete review</Text>
      </Pressable>
    </View>
  );
};

const Review = ({ review, displayAuthor }) => {

  let history = useHistory();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.right}>
          <Text fontWeight='bold' style={styles.line}>
            {displayAuthor ? review.user.username : review.repository.fullName}
          </Text>
          <Text color='textSecondary' style={styles.line}>
            {format(parseISO(review.createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text style={styles.line}>
            {review.text}
          </Text>
        </View>
      </View>
      {!displayAuthor && <Buttons review={review} history={history} />}
    </>
  );
};

export default Review;