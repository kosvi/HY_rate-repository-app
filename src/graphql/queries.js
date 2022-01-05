import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $key: String) {
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $key) {
      totalCount
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor,
        startCursor,
        hasNextPage
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

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    authorizedUser{
      id
      username,
      reviewCount,
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id,
            repository {
              fullName,
            }
            repositoryId,
            rating,
            createdAt,
            text
          }
        }
      }
    }
  }
`;
