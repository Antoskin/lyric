import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo'
import { fetchSong } from '../apollo/queries/songs';
import LyricCreate from './LyricCreate';

class SongDetails extends Component {

    static propTypes = {
        data: PropTypes.shape({
            song: PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })
        })
    }

    render() {
        const { data: { song, loading } } = this.props;

        if(loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        return (
            <>
            
                <p className="alert alert-success">{ song.title }</p>
                <LyricCreate songId={song.id} />
                <Link to="/" className="btn btn-primary">back</Link>
            </>
        )
    }
}

export default graphql(fetchSong, { 
    options: ({ match: { params } }) => ({ 
        variables: { id: params.id } 
    }) 
})(SongDetails);
