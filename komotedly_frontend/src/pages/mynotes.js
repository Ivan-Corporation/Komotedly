import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typed from 'react-typed';


const MyNotes = () => {
  useEffect(() => {
    // update the document title
    document.title = 'My Notes — Komotedly';
  });

  const { loading, error, data } = useQuery(GET_MY_NOTES);

  // if the data is loading, our app will display a loading message
  if (loading) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading</Typography> </React.Fragment>;
  // if there is an error fetching the data, display an error message
  if (error) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>{error.message}</Typography> </React.Fragment>;
  // if the query is successful and there are notes, return the feed of notes
  // else if the query is successful and there aren't notes, display a message
  if (data.me.notes.length !== 0) {
    return <React.Fragment><Typography variant='h5' style={{marginTop:'18px'}} align='left'><b>
    <Typed
    strings={['My Notes:']}
    typeSpeed={100}

  /></b></Typography><NoteFeed notes={data.me.notes} /></React.Fragment>;
  } else {
    return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>You don't have notes yet</Typography> </React.Fragment>;
  }
};

export default MyNotes;
