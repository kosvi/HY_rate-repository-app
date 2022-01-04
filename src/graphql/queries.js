import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const SEARCH_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query searchRepos($key: String!) {
    repositories(searchKeyword: $key) {
      edges {
        node {
          ...RepositoryDetails
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

export const GET_REVIEWS = gql`
  query getReviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;