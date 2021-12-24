import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navbarBackground,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <AppBarTab text='Repositories' action={() => console.log('press')} />
      </Link>
      <Link to='/signin'>
        <AppBarTab text='Sign in' action={() => console.log('sign in')} />
      </Link>
    </View>
  );
};

export default AppBar;