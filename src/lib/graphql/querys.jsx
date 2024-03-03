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

const GET_ONE_ALBUM = gql`
  query GetOneAlbum($slug: String!) {
    getOneAlbum(slug: $slug) {
      information {
        id
        name
        slug
        cover
      }
      tracks {
        name
        slug
        path
        artist {
          name
        }
        album {
          cover
        }
        likes {
          id
          username
        }
        listen_count
      }
    }
  }
`;

const GET_ONE_ARTIST = gql`
  query GetOneArtist($slug: String!) {
    getOneArtist(slug: $slug) {
      information {
        name
        avatar
        slug
        bio
      }
      tracks {
        id
        name
        slug
        path
        listen_count
        artist {
          name
        }
        album {
          cover
        }
      }
    }
  }
`;

const GET_ONE_TRACK = gql`
  query GetOneTrack($slug: String!) {
    getOneTrack(slug: $slug) {
      id
      name
      slug
      path
      listen_count
      artist {
        name
        slug
      }
      album {
        cover
        slug
      }
      likes {
        username
      }
    }
  }
`;

const WHO_I_AM = gql`
  query WhoIAm {
    whoIAm {
      id
      username
    }
  }
`;

export {
  GET_TRACKS,
  GET_ALL_ALBUMS,
  GET_ALL_ARTISTS,
  GET_PLAYLISTS,
  GET_ONE_ALBUM,
  GET_ONE_ARTIST,
  GET_ONE_TRACK,
  WHO_I_AM,
};
