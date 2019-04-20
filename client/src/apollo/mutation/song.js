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

const addLyricMutation = gql`mutation AddLyricToSong($content: String, $songId: ID!) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}`

const likeLyricMutation = gql`mutation LikeLyric($id: ID!) {
  likeLyric(id: $id) {
    id
    likes
  }
}`

export {
  addSongMutation,
  deleteSongMutatin,
  addLyricMutation,
  likeLyricMutation,
};