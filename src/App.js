import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckbl38xy2061c01z0fu8tfp9b/master",
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

client
  .query({
    query: testQuery,
  })
  .then((res) => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">App</div>
    </ApolloProvider>
  );
}

export default App;
