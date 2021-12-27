import React from 'react';
import { View, Image } from 'react-native';
import Text from '../Text';
import styles from './styles';
import Stats from './Stats';

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
        <Text fontWeight='bold' style={styles.titleBoxText}>{fullName}</Text>
        <Text color='textSecondary' style={styles.titleBoxText}>{description}</Text>
        <View style={styles.languagePill}>
          <Text style={styles.languagePillText}>{language}</Text>
        </View>
      </View>
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