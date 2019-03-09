import React, { Component } from 'react';
import SongList from './components/SongList';
import ApolloProvider from './apollo/ApolloProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider>
          <SongList />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
