import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SongList from './components/SongList';
import ApolloProvider from './apollo/ApolloProvider';

class App extends Component {
  render() {
    return (
        <ApolloProvider>
          <Router>
            <div className="app">
              <Route path="/" component={SongList} />
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
