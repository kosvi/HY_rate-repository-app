import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
  mutation authUser($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation createReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
    createReview(review: { ownerName: $ownerName, repositoryName: $repositoryName, rating: $rating, text: $text }) {
      id,
      user {
        username
      },
      repository {
        id
        fullName
      },
      userId,
      repositoryId,
      rating,
      createdAt,
      text
    }
  }
`;
