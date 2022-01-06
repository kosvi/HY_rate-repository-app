import React from 'react';
import useUser from '../../hooks/useUser';
import UserReviewsContainer from './UserReviewsContainer';

const UserReviews = () => {

  const { data, loading } = useUser({ includeReviews: true });

  if (loading) {
    return <></>;
  }

  const reviews = data.authorizedUser.reviews.edges.map(n => n.node);

  return (
    <UserReviewsContainer reviews={reviews} />
  );
};

export default UserReviews;