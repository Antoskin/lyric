import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { songList } from '../apollo/queries/songs'
import { Link } from 'react-router-dom';

class SongList extends Component {
    static propTypes = {
        data: PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
        })
    }
    
    renderList() {
        const { data: { songs } } = this.props;
        return songs.map( song => (
            <p key={song.id}>
                <Link to={song.id} >
                    {song.title}
                </Link>
            </p>
        ))
    }

    render() {
        const { data: { loading, error } } = this.props;
        if (loading || error) return <b>wait..</b>

        return (
            <>
                {this.renderList()}
            </>
        )

    }
}

export default graphql(songList)(SongList);
