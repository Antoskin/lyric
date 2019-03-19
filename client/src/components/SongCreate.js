import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import history from '../router/history';
import { addSongMutation } from '../apollo/mutation/song';
import { listOfSongs } from '../apollo/queries/songs';

class SongCreate extends Component {
  static propTypes = {
    addSong: PropTypes.func.isRequired
  };
  
  state = {
    title: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { addSong } = this.props;
    const { title } = this.state;

    if (title) {
      addSong({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: listOfSongs }]
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

export default graphql(addSongMutation, { name: 'addSong' })(SongCreate);
