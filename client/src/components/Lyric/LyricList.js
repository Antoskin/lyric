import React from 'react'
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo'
import { FaGrinHearts } from 'react-icons/fa';
import { likeLyricMutation } from '../../apollo/mutation/song';

const LyricList = ({ lyricList, likeLyric }) => {
  const handlerLike = ({ id, likes }) => {

    likeLyric({
      variables: {
        id,
        optimisticResponse: {
          __typename: "Mutation",
          likeLyric: {
            id,
            __typename: 'LyricType',
            likes: likes + 11
          }
        }
      },
    })
  }

  return(
    lyricList.map( i => 
      <p key={i.id}>{i.content} 
        <span 
          className="ml-2 btn btn-danger" 
          onClick={() => handlerLike(i)}
        >
            <FaGrinHearts/> {i.likes}
        </span> 
      </p> 
    )
  );
}

LyricList.propTypes = {
  lyricList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
  }))
}

export default graphql(likeLyricMutation, { name: 'likeLyric' })(LyricList);
