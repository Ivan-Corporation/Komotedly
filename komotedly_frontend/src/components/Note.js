import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query';

import EventNoteIcon from '@mui/icons-material/EventNote';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import AnotherSiteLink from '@mui/material/Link'
import CardActionArea from '@mui/material/CardActionArea';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/cardSizes.css'
import '../styles/headerButtons.css'

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
    
          
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6}>
    
    <Card sx={{minWidth: 275}} className='card-responsive' style={{marginBottom:'15px', marginTop:'15px'}}>
    <CardActionArea>
    <AnotherSiteLink href={`note/${note.id}`} style={{ textDecoration: 'none', color:'black' }}>

      <CardContent>
      <Typography variant="subtitle2" style={{float: 'right'}}>
        {format(note.createdAt, 'MMM Do YYYY')} <EventNoteIcon/>
        </Typography>
        <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            
          />
        <Typography variant="body2">
          Author - {note.author.username}
        </Typography>
        
        <Typography variant="body1" style={{marginTop:'35px', marginBottom: '7px',  wordWrap: "break-word"}}>

        {note.content}
        </Typography>
      </CardContent>
      </AnotherSiteLink>

      <Divider/>
      {/* <Button size="small" ><Link style={{ textDecoration: 'none', marginBottom: '-28px' }} to={`note/${note.id}`}><span className='button-hide'>OPEN</span></Link></Button> */}
      <CardActions style={{float: 'right'}}>
      

      <ButtonGroup color="primary"  aria-label="medium secondary button group">
        {data.isLoggedIn ? (
          <Typography> <NoteUser note={note} /></Typography>
            
          
        ) : (
          <Button size="small" endIcon={<FavoriteIcon />}><Typography> Likes: {note.favoriteCount}</Typography></Button>
           
        
        )}
        </ButtonGroup>
      </CardActions>
      </CardActionArea>
    </Card>
    
    
    </Grid>
    </Grid>
  );
};

export default Note;
