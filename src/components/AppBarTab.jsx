import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.navbarBottom,
  },
  containerText: {
    color: theme.colors.navbarForeground
  }
});

const AppBarTab = (props) => {
  return (
    <Pressable onPress={props.action}>
      <View style={styles.container}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.containerText}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBarTab;