import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../Login/useAuth';

const useStyles = makeStyles(theme => ({
  mainButton: {
    marginTop: theme.spacing(1),
  }
}));

// const onSubmit = data => {
//   console.log(data)
// }

const DeliveryForm = (props) => {
  const classes = useStyles();
  const auth = useAuth();
  
  const { handleSubmit, control } = useForm()
  
  
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Controller as={<TextField/>} 
        control={control}
        name="deliveryOption" 
        label="Deliver Option"
        variant="outlined" 
        fullWidth 
        margin="dense" 
        color="secondary" 
        defaultValue="Deliver to door"
      />
      <Controller 
        as={<TextField/>} 
        control={control}
        name="name" 
        label="Business Name" 
        variant="outlined" 
        fullWidth 
        margin="dense" 
        color="secondary"
        defaultValue={auth.user.name}
      />
      <Controller 
        as={<TextField/>} 
        control={control}
        name="roadNo" 
        label="Road No" 
        variant="outlined" 
        fullWidth 
        margin="dense" 
        color="secondary"
        defaultValue=""
      />
      <Controller as={<TextField/>} 
        control={control}
        name="flatNo" 
        label="Flat, Suite OR Floor" 
        variant="outlined" 
        fullWidth 
        margin="dense" 
        color="secondary"
        defaultValue=""
      />
      <Controller as={<TextField/>} 
        control={control}
        name="details" 
        label="Add delivery instructor" 
        fullWidth 
        variant="outlined" 
        multiline 
        rows="3" 
        color="secondary" 
        margin="dense"
        defaultValue=""
      />
      <Button variant="contained" type="submit" color="secondary" size="large"  fullWidth className={classes.mainButton}>
        Save & Continue
      </Button>
    </form>


    
  );
};

export default DeliveryForm;