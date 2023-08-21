import { ApolloClient, InMemoryCache } from "@apollo/client";
const wp_gql_url = 'https://wpnext.clarotm.ir/graphql';

const client = new ApolloClient({
    uri:wp_gql_url,
    // uri:process.env.WP_GRAPHQL_URL2,
    cache: new InMemoryCache(),

})

export default client;