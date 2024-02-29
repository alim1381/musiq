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

export { SEARCH_QUERY };
