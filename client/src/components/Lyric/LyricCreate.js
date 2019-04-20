import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import PropTypes from 'prop-types';
import { addLyricMutation } from '../../apollo/mutation/song';

class LyricCreate extends Component {
    static propTypes = {
        addLyric: PropTypes.func.isRequired,
        data: PropTypes.shape({
            song: PropTypes.shape({
                id: PropTypes.string.isRequired,
                
            }),
            startPolling: PropTypes.func,
            stopPolling: PropTypes.func,
        })
    }

    static defaultProps = {
        data: {
            stopPolling: null
        }
    }

    state = {
        content: '',
        loading: false,
    }

    componentDidMount() { 
        this._ismounted = true;
    }
      
    componentWillUnmount() {
        this._ismounted = false;
    }

    inputHandler = (e) => {
        this.setState({content: e.target.value})
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const { content } = this.state;
        const { data: { song, startPolling }, addLyric } = this.props;

        addLyric({
            variables: {
                content,
                songId: song.id
            }
        }).then( () => {
            if(this._ismounted) {
                this.setState({ content: '' }) 
            }

            startPolling(200);
        })
    }

    _ismounted = false;

    render() {
        const { content } = this.state;
    
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-5 d-flex">
                            <span className="mr-3 mt-1">lyric:</span>
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
