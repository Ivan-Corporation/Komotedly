import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import NoteForm from '../components/NoteForm';
import { NEW_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typed from 'react-typed';


const NewNote = props => {
  useEffect(() => {
    // update the document title
    document.title = 'New Note — Komotedly';
  });

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    // refetch the GET_NOTES and GET_MY_NOTES queries to update the cache
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: data => {
      // when complete, redirect the user to the note page
      props.history.push(`note/${data.newNote.id}`);
    }
  });

  return (
    <React.Fragment>
      <Typography variant='h5' style={{marginTop:'18px'}} align='center'><b><Typed
        strings={['Write new note here:']}
        typeSpeed={100}
      /></b>
      </Typography>
      {/* as the mutation is loading, display a loading message*/}
      {loading && <Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading</Typography>}
      {/* if there is an error, display a error message*/}
      {error && <Typography align='center' variant='h5' style={{marginTop:'40px'}}>Error</Typography>}
      {/* the form component, passing the mutation data as a prop */}
      <NoteForm action={data} />
    </React.Fragment>
  );
};

export default NewNote;
