import React from 'react';
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.listSeparator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {

    const { setOrderBy, setDirection, setPickerSelection, pickerSelection, setFilterString, filterString } = this.props.toHeader;

    return (
      <View>
        <TextInput
          style={{ padding: 10 }}
          onChangeText={(text) => setFilterString(text)}
          placeholder='Filter'
          value={filterString}
        />
        <Picker
          style={{ padding: 10 }}
          selectedValue={pickerSelection}
          onValueChange={(itemValue) => {
            switch (itemValue) {
              case '1':
                setOrderBy('CREATED_AT');
                setDirection('DESC');
                setPickerSelection(itemValue);
                break;
              case '2':
                setOrderBy('RATING_AVERAGE');
                setDirection('DESC');
                setPickerSelection(itemValue);
                break;
              case '3':
                setOrderBy('RATING_AVERAGE');
                setDirection('ASC');
                setPickerSelection(itemValue);
                break;
              default:
                break;
            }
          }}>
          <Picker.Item label='Latest repositories' value='1' />
          <Picker.Item label='Highest rated repositories' value='2' />
          <Picker.Item label='Lowest rated repositories' value='3' />
        </Picker>
      </View>
    );
  };

  render() {

    const props = this.props;

    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];

    const openRepo = (id) => {
      props.history.push(`/repo/${id}`);
    };

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} openRepo={openRepo} />}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.8}
      />
    );
  }
}
