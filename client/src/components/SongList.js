import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { listOfSongs } from '../apollo/queries/songs'
import { deleteSongMutatin } from '../apollo/mutation/song';
import { Link } from 'react-router-dom';

class SongList extends Component {
    static propTypes = {
        data: PropTypes.shape({
          songs: PropTypes.arrayOf(PropTypes.shape({
              id: PropTypes.string,
              title: PropTypes.string,
          })),
          refetch: PropTypes.func.isRequired,
        }),
        deleteSong: PropTypes.func.isRequired,
    }
    
    renderList() {
        const { data: { songs } } = this.props;
        return songs.map( song => (
            <div key={song.id} className="alert alert-success">
                <p>{song.title}</p>
                <button 
                    className="btn btn-danger" 
                    onClick={ () => this.removeSong(song.id) }>
                    delete
                </button>
            </div>
        ))
    }

    removeSong = (id) => {
       const { deleteSong, data: { refetch } } = this.props;

       deleteSong({
           variables: {
               id
           }
       }).then( () => refetch() )

       console.log('deleted')
    }

    render() {
        const { data: { loading, error } } = this.props;
        if (loading || error) return <b>wait..</b>

        console.log(this.props);

        return (
            <>
                {this.renderList()}
                <Link to="/song/new" className="btn btn-outline-success">
                    Add song
                </Link>
            </>
        )

    }
}

export default compose(
    graphql(listOfSongs),
    graphql(deleteSongMutatin, { name: 'deleteSong' }),
)(SongList);
