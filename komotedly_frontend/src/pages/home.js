import React from 'react';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Button from '@mui/material/Button';
import { GET_NOTES } from '../gql/query';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typed from 'react-typed';


const Home = () => {
  // query hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  // if the data is loading, display a loading message
  if (loading) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading</Typography> </React.Fragment>;
  // if there is an error fetching the data, display an error message
  if (error) return <React.Fragment><Button variant='outlined' startIcon={<ArrowBackIosIcon/>} href='/'>Go back</Button><Typography align='center' variant='h5' style={{marginTop:'40px'}}>{error.message}</Typography> </React.Fragment>;

  // if the data is successful, display the data in our UI
  return (
    <React.Fragment>
      <Typography variant='h5' style={{marginTop:'18px'}} align='left'><b>
        <Typed
        strings={['Notes database:']}
        typeSpeed={100}

      /></b></Typography>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button variant='contained' color='info'
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.noteFeed.cursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    // combine the new results and the old
                    notes: [
                      ...previousResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes
                    ],
                    __typename: 'noteFeed'
                  }
                };
              }
            })
          }
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
