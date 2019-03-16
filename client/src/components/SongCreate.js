import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {
  static propTypes = {
    addSongMutation: PropTypes.func.isRequired
  };
  
  state = {
    title: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { addSongMutation } = this.props;

    addSongMutation({
      variables: {
        title: this.state.title
      }
    })

    this.setState({title: ''});
  }

  render() {
    const { title } = this.state
    return (
      <>
        <h3>add song</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={title}
            onChange={ e => this.setState({ title: e.target.value }) }
          />
          <button>click</button>
        </form>
      </>
    )
  }
}

const mutation = gql`mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation, { name: 'addSongMutation' })(SongCreate);
