import React from 'react';
// import our GraphQL dependencies
import { useQuery } from '@apollo/client';
import Typed from 'react-typed';

// import the Note component
import Note from '../components/Note';
import { GET_NOTE } from '../gql/query';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const NotePage = props => {
  // store the id found in the url as a variable
  let id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading</Typography> </React.Fragment>;
  // if there is an error fetching the data, display an error message
  if (error) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>You already found this note</Typography> </React.Fragment>;

  // if the data is successful, display the data in our UI
  return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Note note={data.note}/></React.Fragment>;
};

export default NotePage;
