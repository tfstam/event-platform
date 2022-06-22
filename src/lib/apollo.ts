import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ptqzat2ezj01xk55gh83qz/master',
  cache: new InMemoryCache()
})