import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import ButtonAsLink from './ButtonAsLink';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import '../styles/headerButtons.css'
import Tooltip from '@mui/material/Tooltip';



const FavoriteNote = props => {
  // store the note's favorite count as state
  const [count, setCount] = useState(props.favoriteCount);
  // store if the user has favorited the note as state
  const [favorited, setFavorited] = useState(
    // check if the note exists in the user favorites list
    props.me.favorites.filter(note => note.id === props.noteId).length > 0
  );

  // toggleFavorite mutation hook
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId
    },
    // refetch the GET_MY_FAVORITES query to update the cache
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });

  // if the user has favorited the note display the option to remove the favorite
  // else display the option to add as a favorite
  return (
    <React.Fragment>
      {favorited ? (
        <Tooltip title='Unlike' placement="top" arrow>
      <Button size='small' onClick={() => {
        toggleFavorite();
        setFavorited(false);
        setCount(count - 1);
      }}
      startIcon={<HeartBrokenIcon fontSize='15px'/>}
      data-cy="favorite">
      
         <span className='button-like'> {count}</span>
         </Button>
         </Tooltip>
      ) : (
        <Tooltip title='Like' placement="top" arrow>
        <Button size='small'
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
          data-cy="favorite"
          startIcon={<FavoriteIcon fontSize='15px'/>}
        >
          <span className='button-like'> {count}</span>
         </Button> 
         </Tooltip>
      )}
      
      
    </React.Fragment>
  );
};

export default FavoriteNote;
