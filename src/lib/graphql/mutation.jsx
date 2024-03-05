const { gql } = require("@apollo/client");

const SEARCH_QUERY = gql`
  mutation SearchTrack($name: String!) {
    searchTrack(name: $name) {
      id
      name
      slug
      artist {
        name
      }
      album {
        cover
      }
    }
  }
`;

const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password) {
      id
      username
      token
    }
  }
`;
const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      id
      username
      token
    }
  }
`;

const LIKE_DISLIKE = gql`
  mutation ToLike($id: String!) {
    toLike(trackId: $id)
  }
`;

const CREATE_COMMENT = gql`
  mutation CreateComment($trackId: String!, $text: String!) {
    createComment(trackId: $trackId, text: $text)
  }
`;

const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist($name: String!) {
    createPlaylist(name: $name)
  }
`;

const ADD_TO_PLAYLIST = gql`
  mutation AddToPlaylist($trackId: String!, $playlistId: String!) {
    addToPlaylist(trackId: $trackId, playlistId: $playlistId)
  }
`;

const DELETE_FROM_PLAYLIST = gql`
  mutation RemoveFromPlaylist($trackId: String!, $playlistId: String!) {
    removeFromPlaylist(trackId: $trackId, playlistId: $playlistId)
  }
`;

export {
  SEARCH_QUERY,
  SIGN_UP,
  SIGN_IN,
  LIKE_DISLIKE,
  CREATE_COMMENT,
  CREATE_PLAYLIST,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
};
