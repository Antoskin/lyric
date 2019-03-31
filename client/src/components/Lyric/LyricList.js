import React from 'react'

const LyricList = ({ lyricList }) => 
    lyricList.map( i => <p key={i.id}>{i.content}</p> );

export default LyricList;
