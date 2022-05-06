import Header from './Header';
import Navigation from './Navigation';
import * as React from 'react';
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
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../img/logo.png';
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { IS_LOGGED_IN } from '../gql/query';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RepositoryMetrics } from 'repository-metrics';
import { makeStyles } from "@mui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: 32,
      paddingLeft: 8,
      paddingRight: 8,
      "& .MuiButton-endIcon": {
        margin: 0
      }
    }
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));


const DrawerLinks = [
  {
    id: 1,
    name: 'Notes database',
    link: '/',
    icon: <HomeIcon />
  },
  {
    id: 7,
    name: 'Profile',
    link: '/profile',
    icon: <AccountCircleIcon />
  },
  {
    id: 2,
    name: 'My Notes',
    link: '/mynotes',
    icon: <EventNoteIcon />
  },
  {
    id: 3,
    name: 'Favorites',
    link: '/favorites',
    icon: <FavoriteIcon />
  },
  {
    id: 4,
    name: 'New Note',
    link: '/new',
    icon: <AddIcon />
  },
]



const DrawerLinksBottom = [
  {
    id: 5,
    name: 'Github',
    link: 'https://github.com/Ivan-Corporation',
    icon: <GitHubIcon />
  },
  {
    id: 6,
    name: 'Komolio',
    link: 'https://komolio.netlify.app/',
    icon: <LightbulbCircleIcon />
  },
 
]




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // query hook for user logged in state
  const { data, client } = useQuery(IS_LOGGED_IN);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const classes = useStyles();


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:'darkorange'}} open={open}>
      <Toolbar>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 4,
              ...(open && { display: 'none' }),
            }}
            style={{marginLeft:'-15px'}}
          >
            <MenuIcon sx={{ fontSize: 30 }}/>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
          <Link style={{ textDecoration: 'none' }} to={'/'}><img src={logo} alt="Komotedly Logo"/></Link>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <b>Komotedly</b>
          </Typography>


          {data.isLoggedIn ? (
          <Button
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
            endIcon={<LogoutIcon />} style={{ color: 'white', borderColor:'white', textDecoration: 'none' }}
          >
          Logout
          </Button>
        ) : (
          <ButtonGroup aria-label="outlined button group" disableElevation  variant="outlined">
            <Link style={{ textDecoration: 'none' }} to={'/signin'}><Button endIcon={<LoginIcon />} style={{ color: 'white', borderColor:'white', marginRight:'10px' }}><span className={classes.buttonText}>Login</span></Button></Link>
            <Link style={{ textDecoration: 'none' }} to={'/signup'}><Button endIcon={<AddCircleOutlineIcon />} style={{ color: 'white', borderColor:'white' }} ><span className={classes.buttonText}>Sign Up</span></Button></Link>
            </ButtonGroup>
        )}
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader style={{marginBottom:'7px'}}>
          <IconButton onClick={handleDrawerClose} style={{marginTop:'13px'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ fontSize: 40 }}/> : <ChevronLeftIcon sx={{ fontSize: 40 }}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {DrawerLinks.map(({id, name, link, icon}) => (
            <a href={link} style={{textDecoration:'none'}}>
            <ListItemButton
              key={id}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </a>
          ))}
        </List>
        <Divider />
        <List sx={{ flexGrow: 1 }}>
        {DrawerLinksBottom.map(({id, name, link, icon}) => (
            <a href={link} style={{textDecoration:'none'}}>
            <ListItemButton
              key={id}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </a>
          ))}
        </List>

        <List>
          <div style={{marginLeft:'15px', marginBottom:'7px'}}>{open ? <RepositoryMetrics 
              owner='Ivan-Corporation' 
              repo='Komotedly' 
              theme='light' 
              /> : ''}  
       </div> </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          {children}
        </Typography>
      </Box>
    </Box>
  );
}


// const Layout = ({ children }) => {
//   return (
//     <React.Fragment>
//       <Header />
      
//         <Navigation />
//         {children}
      
//     </React.Fragment>
//   );
// };

