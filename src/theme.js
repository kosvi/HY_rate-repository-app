import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    textOnPrimary: '#ffffff',
    navbarBackground: '#523df2',
    navbarForeground: '#ffffff',
    listSeparator: '#cccccc',
    error: '#ff0000',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  paddings: {
    navbarBottom: 15,
    repolist: 5,
    formInput: 5,
  },
  margins: {
    listBottom: 15,
    formInput: 10,
  },
};

export default theme;