const { gql } = require("@apollo/client");

const GET_HOT_TRACKS = gql`
  query {
    getTracks(limit: 6, category: "hot-tracks") {
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

const GET_NEW_TRACK = gql`
  query {
    getTracks(limit: 6, category: "new-tracks") {
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

const GET_TOP_TRACKS = gql`
  query {
    getTracks(limit: 6, category: "top-tracks") {
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

export { GET_HOT_TRACKS, GET_NEW_TRACK, GET_TOP_TRACKS };
