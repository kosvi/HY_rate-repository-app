import React from 'react';
import { View, Image, Pressable } from 'react-native';
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
        <Text fontWeight='bold' style={styles.titleBoxText} testID='fullName'>{fullName}</Text>
        <Text color='textSecondary' style={styles.titleBoxText} testID='description'>{description}</Text>
        <View style={styles.languagePill}>
          <Text style={styles.languagePillText} testID='language'>{language}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item, openRepo }) => {

  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    id
  } = item;

  return (
    <Pressable onPress={() => openRepo(id)}>
      <View style={styles.container}>
        <RepoTitle ownerAvatarUrl={ownerAvatarUrl} fullName={fullName} description={description} language={language} />
        <Stats stargazersCount={stargazersCount} forksCount={forksCount} reviewCount={reviewCount} ratingAverage={ratingAverage} />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;