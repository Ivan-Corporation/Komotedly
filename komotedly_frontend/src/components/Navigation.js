import React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navigation = () => {
  return (
    <React.Fragment>
      
        <li>
          <Link to="/">
            <span aria-hidden="true" role="img">
              🏠
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mynotes">
            <span aria-hidden="true" role="img">
              📓
            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <span aria-hidden="true" role="img">
              🌟
            </span>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/new">
            <span aria-hidden="true" role="img">
              ➕
            </span>
            New
          </Link>
        </li>
     
        </React.Fragment>
  );
};

export default Navigation;
