import theme from '../../theme';
import { StyleSheet } from 'react-native';

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
    padding: theme.paddings.repolist,
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

export default styles;