const { gql } = require("@apollo/client");

const GET_TRACKS = gql`
  query GetTracks($limit: Int!, $category: String!) {
    getTracks(limit: $limit, category: $category) {
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

const GET_ALL_ALBUMS = gql`
  query GetAlbums {
    getAlbums {
      id
      name
      slug
      cover
    }
  }
`;

const GET_ALL_ARTISTS = gql`
  query GetArtists {
    getArtists {
      id
      name
      avatar
      slug
      bio
    }
  }
`;

const GET_PLAYLISTS = gql`
  query GetPlaylists($limit: Int!) {
    getPlaylists(limit: $limit) {
      id
      name
      slug
      userId {
        id
        username
      }
    }
  }
`;
export { GET_TRACKS, GET_ALL_ALBUMS, GET_ALL_ARTISTS, GET_PLAYLISTS };
