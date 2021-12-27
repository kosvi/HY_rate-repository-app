import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id,
          name,
          ownerName,
          fullName,
          reviewCount,
          ratingAverage,
          forksCount,
          stargazersCount,
          description,
          language,
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const READ_TOKEN = gql`
  query {
    authorizedUser {
      id,
      username
    }
  }
`;
