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
      
      

    </AppBar>
  );
};

export default withRouter(Header);
