import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const useStyles = makeStyles(theme => ({
  anchor: {
    textDecoration: 'none',
    color: '#000'
  }
}));

const BackButton = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.anchor}>
      <Button
        color="secondary"
        startIcon={<KeyboardBackspaceIcon />}
        size='large'
        component="span"
      >
        Back
      </Button>
    </Link>
  );
};

export default BackButton;