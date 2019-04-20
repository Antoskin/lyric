import React, { Component } from 'react'
import { ApolloProvider as ReactApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import PropTypes from 'prop-types';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})

const ApolloProvider = ({children}) => (
  <>
    <ReactApolloProvider client={client}>
        {children}
    </ReactApolloProvider>
  </>
)

ApolloProvider.propTypes = {
  children: PropTypes.node
};

export default ApolloProvider;
