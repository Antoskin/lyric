import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import PropTypes from 'prop-types';
import { addLyricMutation } from '../../apollo/mutation/song';

class LyricCreate extends Component {
    static propTypes = {
        addLyric: PropTypes.func.isRequired,
        songId: PropTypes.string.isRequired,
    }

    state = {
        content: '',
    }

    inputHandler = (e) => {
        this.setState({content: e.target.value})
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const { content } = this.state;
        const { songId, addLyric } = this.props;

        addLyric({
            variables: {
                content,
                songId
            },
        }).then( () => this.setState({ content: '' }) )
    }

    render() {
        const { content } = this.state;
    
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>add lyric:</label>
                    <div className="row">
                        <div className="col-7">
                        <input 
                            type="" 
                            className="form-control" 
                            value={content}
                            onChange={ this.inputHandler }
                        />
                        </div>
                        <div className="col-5">
                            <button className="btn btn-success pr-3 pl-3">add</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default graphql(addLyricMutation, { name: 'addLyric' })(LyricCreate);
