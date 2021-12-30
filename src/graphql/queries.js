import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query getRepo($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
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
