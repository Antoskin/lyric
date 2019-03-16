import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import history from '../router/history';

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
    const { title } = this.state;

    if (title) {
      addSongMutation({
        variables: {
          title: this.state.title
        }
      }).then( () => history.push('/'))
    }

    this.setState({title: ''});
   }

  render() {
    const { title } = this.state
    return (
      <>
        <h3>add song</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input 
              value={title}
              className="form-control"
              onChange={ e => this.setState({ title: e.target.value }) }
            />
          </div>
          <button type="submit" className="btn btn-outline-success mr-2">Create</button>
          <Link to="/" className="btn btn-outline-warning" >Cancel</Link>
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
