import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.margins.listBottom,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  repoTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarBox: {
    flexGrow: 0,
    padding: theme.paddings.repolist,
  },
  titleBox: {
    flexGrow: 1,
    padding: theme.paddings.repolist,
  },
  titleBoxText: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  languagePill: {
    alignSelf: 'flex-start',
  },
  languagePillText: {
    color: '#ffffff',
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.repolist,
    borderRadius: 5,
  },
  repoStats: {
    display: 'flex',
    flexDirection: 'row',
  },
  repoStatsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

const RepoAvatar = ({ ownerAvatarUrl }) => {
  return (
    <View style={styles.avatarBox}>
      <Image
        style={styles.avatar}
        source={{ uri: ownerAvatarUrl }}
      />
    </View>
  );
};

const RepoTitle = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.repoTitle}>
      <RepoAvatar ownerAvatarUrl={ownerAvatarUrl} />
      <View style={styles.titleBox}>
        <Text fontWeight='bold' >{fullName}</Text>
        <Text color='textSecondary' style={styles.titleBoxText}>{description}</Text>
        <View style={styles.languagePill}>
          <Text style={styles.languagePillText}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

const StatsBox = ({ title, amount }) => {
  return (
    <View style={styles.repoStatsBox}>
      <Text fontWeight='bold'>{amount > 1000 ? `${Math.round(amount / 100) / 10}k` : amount}</Text>
      <Text color='textSecondary'>{title}</Text>
    </View>
  );
};

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

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl
  } = item;

  return (
    <View style={styles.container}>
      <RepoTitle ownerAvatarUrl={ownerAvatarUrl} fullName={fullName} description={description} language={language} />
      <Stats stargazersCount={stargazersCount} forksCount={forksCount} reviewCount={reviewCount} ratingAverage={ratingAverage} />
    </View>
  );
};

export default RepositoryItem;