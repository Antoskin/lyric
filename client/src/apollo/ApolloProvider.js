import React, { Component } from 'react'
import { ApolloProvider as ReactApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})

class ApolloProvider extends Component {
  render() {
    return (
      <>
        <ReactApolloProvider client={client}>
            {this.props.children}
        </ReactApolloProvider>
      </>
    )
  }
}

export default ApolloProvider;
