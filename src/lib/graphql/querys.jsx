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
        id
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

const GET_COMMENTS = gql`
  query GetComments($trackId: String!) {
    getComments(trackId: $trackId) {
      id
      text
      userId {
        id
        username
      }
    }
  }
`;

const GET_ALL_PLAYLISTS = gql`
  query GetPlaylists {
    getPlaylists {
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

const GET_ONE_PLAYLIST = gql`
  query GetOnePlaylist($slug: String!) {
    getOnePlaylist(slug: $slug) {
      id
      name
      slug
      userId {
        id
      }
      tracks {
        id
        name
        slug
        artist {
          name
        }
      }
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
  GET_COMMENTS,
  GET_ALL_PLAYLISTS,
  GET_ONE_PLAYLIST,
};
