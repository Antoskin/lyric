import gql from 'graphql-tag';

const listOfSongs = gql`
    {
        songs {
            id
            title
        }
    }
`;

const fetchSong = gql`query Song($id: ID!) {
    song(id: $id) {
        id
        title
        lyrics {
            id
            content
            likes
        }
    }
}`;

export { listOfSongs, fetchSong }