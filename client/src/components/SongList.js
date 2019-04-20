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
        return songs.map(({id, title}) => (
            <div key={id} className="alert alert-success">
                <Link className="btn mr-2" to={`/song/${id}`}>{title}</Link>
                <button 
                    className="badge badge-warning"
                    style={{float: 'right'}}
                    onClick={ () => this.removeSong(id) }>
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
    }

    render() {
        const { data: { loading, error } } = this.props;
        if (loading || error) return <b>wait..</b>

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
