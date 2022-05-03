import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';


import ButtonAsLink from './ButtonAsLink';
import { IS_LOGGED_IN } from '../gql/query';



const Header = props => {
  // query hook for user logged in state
  const { data, client } = useQuery(IS_LOGGED_IN);

  return (
    <AppBar position="static" color='info'> 
      <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
          <Link style={{ textDecoration: 'none' }} to={'/'}><img src={logo} alt="Komotedly Logo" /></Link>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <b>Komotedly</b>
          </Typography>


          {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              // remove the token
              localStorage.removeItem('token');
              // clear the application's cache
              client.resetStore();
              // update local state
              client.writeData({ data: { isLoggedIn: false } });
              // redirect the user to the homepage
              props.history.push('/');
            }}
          >
            <Button endIcon={<LogoutIcon />} style={{ color: 'white', borderColor:'white' }}>Logout</Button>
          </ButtonAsLink>
        ) : (
          <ButtonGroup aria-label="outlined button group" disableElevation  variant="outlined">
            <Link style={{ textDecoration: 'none' }} to={'/signin'}><Button endIcon={<LoginIcon />} style={{ color: 'white', borderColor:'white', marginRight:'10px' }}>Login</Button></Link>
            <Link style={{ textDecoration: 'none' }} to={'/signup'}><Button endIcon={<AddCircleOutlineIcon />} style={{ color: 'white', borderColor:'white' }} >Sign Up</Button></Link>
            </ButtonGroup>
        )}
          
        </Toolbar>
      

    </AppBar>
  );
};

export default withRouter(Header);
