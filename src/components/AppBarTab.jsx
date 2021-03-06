import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.navbarBottom,
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerText: {
    color: theme.colors.navbarForeground
  }
});

const AppBarTab = (props) => {
  return (
    <Link to={props.tabPath}>
      <View style={styles.container}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.containerText}>
          {props.text}
        </Text>
      </View>
    </Link>
  );
};

export default AppBarTab;