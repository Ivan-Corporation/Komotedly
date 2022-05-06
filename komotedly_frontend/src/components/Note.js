import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query';

import EventNoteIcon from '@mui/icons-material/EventNote';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// Keep notes from extending wider than 800px
const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

// Style the note meta data
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

// add some space between the avatar and meta info
const MetaInfo = styled.div`
  padding-right: 1em;
`;

// align 'Favorites' to the right on large screens
const UserActions = styled.div`
  margin-left: auto;
`;




const Note = ({ note }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  return (
    // <StyledNote>
    //   <MetaData>
    //     <MetaInfo>
    //       <img
    //         src={note.author.avatar}
    //         alt={`${note.author.username} avatar`}
    //         height="50px"
    //       />
    //     </MetaInfo>
    //     <MetaInfo>
    //       <em>by</em> {note.author.username} <br />
    //       {format(note.createdAt, 'MMM Do YYYY')}
    //     </MetaInfo>
    //     {data.isLoggedIn ? (
    //       <UserActions>
    //         <NoteUser note={note} />
    //       </UserActions>
    //     ) : (
    //       <UserActions>
    //         <em>Favorites:</em> {note.favoriteCount}
    //       </UserActions>
    //     )}
    //   </MetaData>
    //   <ReactMarkdown source={note.content} />
    // </StyledNote>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="subtitle2" style={{float: 'right'}}>
        {format(note.createdAt, 'MMM Do YYYY')} <EventNoteIcon/>
        </Typography>
        <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            
          />
        <Typography >
          Author - {note.author.username}
        </Typography>
        
        <Typography variant="body1" >

        {note.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Note;
