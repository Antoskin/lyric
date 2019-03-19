import gql from 'graphql-tag';

const listOfSongs = gql`
    {
        songs {
            id
            title
        }
    }
`;

export { listOfSongs }