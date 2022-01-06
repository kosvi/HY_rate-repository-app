import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { READ_TOKEN } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navbarBackground,
  },
  // ...
});

const AppBar = () => {

  const { data, loading } = useQuery(READ_TOKEN);

  console.log('token loading', loading);
  if (loading) {
    return <></>;
  }
  console.log(data);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' tabPath='/' />
        {data.authorizedUser && <AppBarTab text='Create a review' tabPath='/addReview' />}
        {data.authorizedUser && <AppBarTab text='My reviews' tabPath='/userreviews' />}
        {!data.authorizedUser && <AppBarTab text='Sign in' tabPath='/signin' />}
        {!data.authorizedUser && <AppBarTab text='Sign up' tabPath='/signup' />}
        {data.authorizedUser && <AppBarTab text='Sign out' tabPath='/signout' />}
      </ScrollView>
    </View>
  );
};

export default AppBar;