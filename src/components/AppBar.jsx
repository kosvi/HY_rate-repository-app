import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' tabPath='/' action={() => console.log('press')} />
        <AppBarTab text='Sign in' tabPath='/signin' action={() => console.log('sign in')} />
      </ScrollView>
    </View>
  );
};

export default AppBar;