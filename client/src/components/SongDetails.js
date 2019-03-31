import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose, graphql } from 'react-apollo'
import { fetchSong } from '../apollo/queries/songs';
import { LyricCreate, LyricList } from './Lyric';

class SongDetails extends Component {
    static propTypes = {
        data: PropTypes.shape({
            song: PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                lyrics: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
            })
        })
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    mounted = false;

    render() {
        const { data: { song, loading, error } } = this.props;

        if(loading || !this.mounted) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        
        if(!song) {
            return <p>error</p>;
        }

        console.log(this.props);

        return (
            <>
                <p className="alert alert-success">{ song.title }</p>
                <LyricList lyricList={song.lyrics} />
                <LyricCreate songId={song.id} />
                <Link to="/" className="btn btn-primary">back</Link>
            </>
        )
    }
}

export default compose(
    graphql(fetchSong, { 
        options: ({ match: { params } }) => ({ 
            variables: { id: params.id } 
        }) 
    }),
    withRouter,
)(SongDetails);
