import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';
import ApolloProvider from './apollo/ApolloProvider';
import history from './router/history';

class App extends Component {

  render() {
    return (
        <ApolloProvider>
          <Router history={history}>
            <div className="container app mt-4">
              <Switch>
                <Route path="/" exact component={SongList} />
                <Route path="/song/new" component={SongCreate} />
                <Route path="/song/:id" component={SongDetails} />
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
