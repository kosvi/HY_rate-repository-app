import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import RepositoryItemPage from './RepositoryItemPage';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import UserReviews from './UserReviews';
// import { useRouteMatch } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {

  //  const match = useRouteMatch('/repo/:id');

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signout'>
          <SignOut />
        </Route>
        <Route path='/repo/:id'>
          <RepositoryItemPage />
        </Route>
        <Route path='/addReview'>
          <ReviewForm />
        </Route>
        <Route path='/userreviews'>
          <UserReviews />
        </Route>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;