import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';

class SongList extends Component {
    renderSong() {
        return this.props.data.songs.map( song => (
           <li key={song.id} className="collection-item"> { song.title } </li>
        ));
    }

    render() {
        if( this.props.data.loading ) return <b>...</b>
        return ( 
            <ul className="collection">
                { this.renderSong() }
            </ul>
        )
    }
}

const query = gql`
    {
        songs {
            title
            id
        }
    }
`

export default graphql(query)(SongList);
