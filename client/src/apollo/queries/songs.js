import gql from 'graphql-tag';

const songList = gql`
    {
        songs {
            title
        }
    }
`;

export { songList }