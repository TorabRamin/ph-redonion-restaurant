import React from 'react';
import './Banner.css'
import { Typography, InputBase, Button, Box } from '@material-ui/core';
import {
  fade, makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    padding: '15px 30px',
    borderRadius: theme.spacing(3, 0, 0 , 3),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    backgroundColor: fade(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.9),
    }
  },
  searchBtn: {
    padding: '12px 30px',
    [theme.breakpoints.up('xs')]: {
      padding: '12px 20px',
    },
    borderRadius: theme.spacing(0, 3, 3, 0)
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="div" align="center" className="Banner-wrap">
      <Typography variant="h3">
        Best food waiting for your belly
      </Typography>

      <Box component="div"  className="search-form-wrap">
        <InputBase
          placeholder="Search food item"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button variant="contained" color="secondary" className={classes.searchBtn}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;