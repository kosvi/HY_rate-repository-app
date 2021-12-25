import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputStyle: {
    padding: theme.paddings.formInput,
    margin: theme.margins.formInput,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle, styles.inputStyle} {...props} />;
};

export default TextInput;