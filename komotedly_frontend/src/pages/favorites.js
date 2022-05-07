import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_FAVORITES } from '../gql/query';
import Typed from 'react-typed';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = 'Favorites — Komotedly';
  });

  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  // if the data is loading, our app will display a loading message
  if (loading) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading</Typography> </React.Fragment>;
  // if there is an error fetching the data, display an error message
  if (error) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>{error.message}</Typography> </React.Fragment>;
  // if the query is successful and there are notes, return the feed of notes
  // else if the query is successful and there aren't notes, display a message
  if (data.me.favorites.length !== 0) {
    return <React.Fragment><Typography variant='h5' style={{marginTop:'18px'}} align='left'><b>
    <Typed
    strings={['Favorites:']}
    typeSpeed={100}

  /></b></Typography><NoteFeed notes={data.me.favorites} /></React.Fragment>;
  } else {
    return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>You don't like notes yet</Typography> </React.Fragment>;
  }
};

export default Favorites;
