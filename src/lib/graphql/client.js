import { getToken } from "@/app/actions";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authMiddleware = new ApolloLink(async (operation, forward) => {
  // add the authorization to the headers
  const token = await getToken();
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware,httpLink),
  });
});
