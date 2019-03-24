import gql from 'graphql-tag';

const addSongMutation = gql`mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const deleteSongMutatin = gql`mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const addLyricMutation = gql`mutation addLyricToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}`

export {
  addSongMutation,
  deleteSongMutatin,
  addLyricMutation,
};