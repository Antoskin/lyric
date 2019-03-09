import gql from 'graphql-tag';

const songList = gql`
    {
        songs {
            id
            title
        }
    }
`;

export { songList }