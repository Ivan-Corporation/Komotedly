import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/headerButtons.css'

import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';
import { GET_ME } from '../gql/query';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
     
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <Link style={{ textDecoration: 'none' }} to={`/edit/${props.note.id}`}>
          <Button size="small" endIcon={<EditIcon />}>
          <span className='button-hide'>EDIT</span>
          </Button>
          </Link>
          <Button endIcon={<DeleteIcon/>} size="small">
          <DeleteNote noteId={props.note.id} />
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NoteUser;
