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

export {
  addSongMutation,
  deleteSongMutatin,
};