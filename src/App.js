import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

// Connecting site to the GraphQl API
const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckbl38xy2061c01z0fu8tfp9b/master",
});

// Writing a query
const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

// Running a query outside of React
// client
//   .query({
//     query: testQuery,
//   })
//   .then((res) => console.log(res));

// Apollo Provider attached the client to our React app
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Query query={POSTS_QUERY}>
          {({ loading, data }) => {
            if (loading) return "Loading...";
            const { posts } = data;
            return posts.map((post) => <h1>{post.title}</h1>);
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
