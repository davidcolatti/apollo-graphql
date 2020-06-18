import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckbl38xy2061c01z0fu8tfp9b/master",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">App</div>
    </ApolloProvider>
  );
}

export default App;
