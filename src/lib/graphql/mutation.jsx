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
export { SEARCH_QUERY, SIGN_UP, SIGN_IN };
