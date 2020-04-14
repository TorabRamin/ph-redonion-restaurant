import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form'
import { TextField, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/logo2.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  signupForm: {
    padding: theme.spacing(8, 0),
    textAlign: 'center'
  },
  mainButton: {
    marginTop: theme.spacing(1),
  },
  logo: {
    height: "80px",
    marginBottom: theme.spacing(3)
  }
}));

const SignupForm = (props) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  return (
    <Container className="wrapper">
      <Grid className={classes.signupForm} container justify="center">
        <Grid item xs={12} md={4}>
          <img src={logo} alt={logo} className={classes.logo}/>
          <form onSubmit={handleSubmit(props)}>
            <Controller as={<TextField/>} 
              control={control}
              name="name" 
              label="Name"
              variant="outlined" 
              fullWidth 
              margin="dense" 
              color="secondary" 
              defaultValue=""
            />
            <Controller 
              as={<TextField/>} 
              control={control}
              name="email" 
              label="Email" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              color="secondary"
              defaultValue=""
            />
            <Controller 
              as={<TextField/>} 
              control={control}
              name="password" 
              label="Password" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              color="secondary"
              defaultValue=""
            />
            <Controller 
              as={<TextField/>} 
              control={control}
              name="confirm_password" 
              label="Confirm Password" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              color="secondary"
              defaultValue=""
            />
            <Button variant="contained" type="submit" color="secondary" size="large"  fullWidth className={classes.mainButton}>
              Sign In
            </Button>
          </form>
          <Link to="/login">
            <Button
              color="secondary"
              component="span"
            >
              Already have an account
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>  
    
  );
};

export default SignupForm;