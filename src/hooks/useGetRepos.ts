import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { IRepository } from '../constants';

const GET_DATA = gql`
  query GetRepos($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            resourcePath
            owner {
              login
              avatarUrl
              resourcePath
            }
            name
            description
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const useGetRepos = (query: string) => {
  const [prevSectionId, setPrevSectionId] = useState<string | null>(null);
  const [currentSectionId, setcurrentSectionId] = useState<string | null>(null);
  const [repos, setRepos] = useState<IRepository['search']['edges']>([]);

  const { data } = useQuery<IRepository>(GET_DATA, {
    variables: { query, after: currentSectionId },
  });

  const fetchMore = () => {
    setcurrentSectionId(data?.search?.pageInfo?.endCursor || null);
  };

  useEffect(() => {
    setcurrentSectionId(null);
    setRepos([]);
  }, [query]);

  useEffect(() => {
    if (
      (data && currentSectionId !== prevSectionId) ||
      (!repos.length && data)
    ) {
      setRepos([...repos, ...data.search.edges]);
      setPrevSectionId(currentSectionId);
    }
  }, [data, repos, currentSectionId, prevSectionId]);

  return { repos, fetchMore };
};
