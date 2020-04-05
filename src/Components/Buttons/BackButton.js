import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const BackButton = (props) => {

  return (
      <Button
        color="secondary"
        startIcon={<KeyboardBackspaceIcon />}
        size='large'
        component="span"
        onClick={props.history.goBack}
      >
        Back
      </Button>
  );
};

export default withRouter(BackButton);