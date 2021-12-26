import React from 'react';
import Text from '../Text';
import { View } from 'react-native';
import styles from './styles';

const StatsBox = ({ title, amount }) => {
  return (
    <View style={styles.repoStatsBox}>
      <Text fontWeight='bold'>{amount > 1000 ? `${Math.round(amount / 100) / 10}k` : amount}</Text>
      <Text color='textSecondary'>{title}</Text>
    </View>
  );
};

export default StatsBox;