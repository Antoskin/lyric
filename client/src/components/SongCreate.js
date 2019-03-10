import React, { Component } from 'react'

export default class SongCreate extends Component {
  
  state = {
    title: ''
  }

  render() {
    const { title } = this.state
    return (
      <>
        <h3>add song</h3>
        <form>
          <input 
            value={title}
            onChange={ e => this.setState({ title: e.target.value }) }
          />
        </form>
      </>
    )
  }
}
