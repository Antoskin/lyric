import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { songList } from '../apollo/queries/songs'
import { Link } from 'react-router-dom';

class SongList extends Component {

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
