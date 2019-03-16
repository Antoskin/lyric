import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import ApolloProvider from './apollo/ApolloProvider';
import history from './router/history';

class App extends Component {

  render() {
    return (
        <ApolloProvider>
          <Router history={history}>
            <div className="container app">
              <Route exact path="/" component={SongList} />
              <Route path="/song/new" component={SongCreate}  />
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
