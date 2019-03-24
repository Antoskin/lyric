import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import PropTypes from 'prop-types';
import { addLyricMutation } from '../apollo/mutation/song';

class LyricCreate extends Component {

    static propTypes = {
        addLyric: PropTypes.func.isRequired,
        songId: PropTypes.string.isRequired,
    }

    state = {
        content: '',
    }

    onSubmit = () => {
        const { content } = this.state;
        const { songId, addLyric } = this.props;

        addLyric({
            variables: {
                content,
                songId
            }
        })
    }

    inputHandler = (e) => {
        this.setState({content: e.target.value})
    } 

    render() {
        const { content } = this.state;
        console.log(this.props)
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>add lyric:</label>
                    <input 
                        type="" 
                        className="form-control" 
                        value={content}
                        onChange={ this.inputHandler }
                    />
                </div>
            </form>
        )
    }
}

export default graphql(addLyricMutation, { name: 'addLyric' })(LyricCreate);
