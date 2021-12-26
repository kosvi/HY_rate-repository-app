import React from 'react';
import { View } from 'react-native';
import StatsBox from './StatsBox';
import styles from './styles';

const Stats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={styles.repoStats}>
      <StatsBox title='Stars' amount={stargazersCount} />
      <StatsBox title='Forks' amount={forksCount} />
      <StatsBox title='Reviews' amount={reviewCount} />
      <StatsBox title='Rating' amount={ratingAverage} />
    </View>
  );
};

export default Stats;