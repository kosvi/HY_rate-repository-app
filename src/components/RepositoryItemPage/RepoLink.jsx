import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  LinkContainer: {
    display: 'flex',
    marginBottom: 5,
  },
  LinkText: {
    color: '#ffffff',
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.repolist,
    borderRadius: 5,
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

const RepoLink = ({ url }) => {

  const openUrl = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable onPress={openUrl}>
      <View style={styles.LinkContainer}>
        <Text fontWeight='bold' style={styles.LinkText}>
          Open in Github
        </Text>
      </View>
    </Pressable>
  );
};

export default RepoLink;
