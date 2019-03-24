import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo'
import { fetchSong } from '../apollo/queries/songs';

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
        console.log(this.props);
        const { data: { song, loading } } = this.props;

        if(loading) return 'wait...'

        return (
            <>
                <p>{ song.id }</p>
                <p>{ song.title }</p>
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
