export enum ROUTES {
  empty = '/',
  welcome = '/welcome',
  home = '/home'
};

export const GRAPHQL_URL = 'https://api.github.com/graphql';

export interface IRepository {
  search: {
    repositoryCount: number,
    edges: [
      {
        node: {
          owner: {
            login: string
          },
          name: string,
        }
      }
    ]
  }
};
