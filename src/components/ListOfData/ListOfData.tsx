import './ListOfData.css';
import { useSearchParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { IRepository } from '../../constants';

const GET_DATA = gql`
    query GetRepos($query: String!) {
        search(query: $query, type: REPOSITORY, first: 10) {
            repositoryCount
            edges {
              node {
                ... on Repository {
                  owner {
                    login
                  }
                  name
                }
              }
            }
        }
    }
    `;

export const ListOfData = () => {
    const [searchParams] = useSearchParams();
    const query = `${searchParams.get('search') || ''} :in:name`

    const { data } = useQuery<IRepository>(GET_DATA, { variables: { query } });

    if (!searchParams.get('search') || !data?.search.repositoryCount) return (
        <div className="list">
            <p>No data. Find something to see results.</p>
        </div>
    );

    return (
    <ul className="list">
        {
        data.search.edges.map((el) => 
        <li key={'key'+el.node.name}>
            <span>Repo:</span>
            <br />
            <p>{el.node.name}</p>
        </li>)
        }
    </ul>
    );
}