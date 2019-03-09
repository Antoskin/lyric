import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, indexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import App from './components/App';

const client = new ApolloClient({})

const Root = () => {
  return (
    <div>
      Lirycs ss
    </div>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
