import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Path from './Path';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },



}));

function Bar(props) {
  
  const classes = useStyles();
  const setinput_value = props.setinput_value1;
  const input_value = props.input;
  
  const submit=props.submit;

  
  const checkIfEnterPressed = (e) => {
    if (e.charCode == 13) {
      e.preventDefault();
      submit();
    }
  }


  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ top: open });
  };


  const list = (anchor) => {return(
    <div>

    <CloseIcon onClick={toggleDrawer('top',false)} style={{position:'absolute',right:'10px'}} />
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      

        
          <ul >
            {['Top_Rated_Movies', 'Most_Popular_Movies', 'Coming_Soon', 'Release_Calendar'].map((text, index) => (

              <li >
                <Link to={`/${text}`}>
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <LoyaltyIcon /> : <FavoriteIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              </li>
            ))}
          </ul>
  
      
      <Divider />
      
    </div>

    </div>
  );}


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('top', true)}
          >
            <MenuIcon onClick={toggleDrawer('top', true)} />
          </IconButton>


          <React.Fragment key={'top'}  >
            <Drawer style={{backgroundColor:'black'}} anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
              {list('top')}
            </Drawer>
          </React.Fragment>



          <Typography className={classes.title} variant="h6" noWrap>
            Movies Show
          </Typography>
          
          <Link to={`/search`} style={{textDecoration:'none'}} >
          <div className={classes.search}>
            <div className={classes.searchIcon} onClick={submit}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => { setinput_value(e.target.value) }}
              onKeyPress={e => checkIfEnterPressed(e)}
              
            />
          </div>
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}




export default Bar;



