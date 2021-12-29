import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      // eslint-disable-next-line no-unused-vars
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const nodes = repositories.edges.map(r => r.node);
      const fullNames = getAllByTestId('fullName');
      const descriptions = getAllByTestId('description');
      const languages = getAllByTestId('language');
      const stars = getAllByTestId('Stars');
      const forks = getAllByTestId('Forks');
      const reviews = getAllByTestId('Reviews');
      const ratings = getAllByTestId('Rating');
      expect(fullNames.length).toBe(nodes.length);
      for (let i = 0; i < nodes.length; i++) {
        expect(fullNames[i]).toHaveTextContent(nodes[i].fullName);
        expect(descriptions[i]).toHaveTextContent(nodes[i].description);
        expect(languages[i]).toHaveTextContent(nodes[i].language);
      }
      expect(stars[0]).toHaveTextContent('21.9k');
      expect(forks[0]).toHaveTextContent('1.6k');
      expect(forks[1]).toHaveTextContent('69');
      expect(reviews[1]).toHaveTextContent('3');
      expect(ratings[0]).toHaveTextContent('88');
      expect(ratings[1]).not.toHaveTextContent('88');
    });
  });
});