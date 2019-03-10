import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import ApolloProvider from './apollo/ApolloProvider';

class App extends Component {

  render() {
    return (
        <ApolloProvider>
          <Router>
            <div className="app">
              <Route exact path="/" component={SongList} />
              <Route path="/song/create" component={SongCreate}  />
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
