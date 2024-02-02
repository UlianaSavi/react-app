export const GRAPHQL_URL = 'https://api.github.com/graphql';

export const GITHUB_URL = 'https://github.com';

export enum ROUTES {
  empty = '/',
  welcome = '/welcome',
  home = '/home',
}

type Repo = {
  node: {
    resourcePath: string;
    owner: {
      login: string;
      avatarUrl: string;
      resourcePath: string;
    };
    name: string;
    description: string;
  };
};

export interface IRepository {
  search: {
    repositoryCount: number;
    edges: Repo[];
    pageInfo: {
      endCursor: string;
      startCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}
