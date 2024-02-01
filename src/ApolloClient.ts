import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_URL } from './constants';

const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
});

  
const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_TOKEN;
    
    return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
    }
});
  
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});