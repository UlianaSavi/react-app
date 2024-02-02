export enum ROUTES {
  empty = '/',
  welcome = '/welcome',
  home = '/home'
}

export const GRAPHQL_URL = 'https://api.github.com/graphql';

type Repo = {
  node: {
    owner: {
      login: string,
    },
    name: string,
  }
};

export interface IRepository {
  search: {
    repositoryCount: number,
    edges: Repo[],
    pageInfo: {
      endCursor: string,
      startCursor: string,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    }
  }
}
