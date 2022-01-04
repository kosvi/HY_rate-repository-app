import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
// import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.listSeparator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

// const RepositoryListContainer = ({ repositories }) => {
export class RepositoryListContainer extends React.Component {

  render() {

    const props = this.props;

    // let history = useHistory();
    // Get the nodes from the edges array
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
      />
    );
  }
}

// export default RepositoryListContainer;