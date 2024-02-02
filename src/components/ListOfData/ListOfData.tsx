import { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import './ListOfData.css';
import { IRepository } from '../../constants';

const GET_DATA = gql`
    query GetRepos($query: String!, $after: String) {
        search(query: $query, type: REPOSITORY, first: 10, after: $after) {
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
            pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
            }
        }
    }
    `;

export const ListOfData = () => {
    const [prevSectionId, setPrevSectionId] = useState<string | null>(null);
    const [currentSectionId, setcurrentSectionId] = useState<string | null>(null);
    const [repos, setRepos] = useState<IRepository['search']['edges']>([]);
    const [searchParams] = useSearchParams();
    const query = `${searchParams.get('search') || ''} :in:name`

    const { data } = useQuery<IRepository>(GET_DATA, { variables: { query, after: currentSectionId } });

    const fetchMore = () => {
        setcurrentSectionId(data?.search?.pageInfo?.endCursor || null);
    };

    useEffect(() => {
        console.log(currentSectionId, prevSectionId, data, repos);
        if ((data && (currentSectionId !== prevSectionId)) || (!repos.length && data)) {
            setRepos([...repos, ...data.search.edges]);
            setPrevSectionId(currentSectionId);
        }
    }, [data, repos, currentSectionId, prevSectionId]);

    if (!searchParams.get('search') || !repos.length) {
        return (
            <div className="list">
                <p>No data. Find something to see results.</p>
            </div>
        );
    }

    return (
    <>
        <button onClick={fetchMore}>fetch</button>
        <ul className="list">
            {
                repos.map((el) => (
                        <li id={`${el.node.name}__${el.node.owner.login}`}>
                            <span>Repository name: </span>
                            <i>{el.node.name}</i>
                        </li>
                    )
                )
            }
        </ul>
    </>
    );
}