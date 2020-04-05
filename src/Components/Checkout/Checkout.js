import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../Buttons/BackButton';
import "./Checkout.css"


const useStyles = makeStyles(theme => ({
  detailsContainer: {
    padding: theme.spacing(8, 0)
  },
  text_field: {
    background: "#f5f5f5"
  },
  mainButton: {
    marginTop: theme.spacing(1),
  },
  heading: {
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #9b9b9b"
  }
}));

const Checkout = () => {
  const classes = useStyles();
  return (
    <Box component='section'>
      <Container>
        <Grid container spacing={4} className={classes.detailsContainer}>
          <Grid item xs={12}>
            <BackButton/>
          </Grid>

          <Grid item md={6}>
            <Typography variant="h5" className={classes.heading}>
              Edit Delivery Details
            </Typography>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField label="Deliver Option" variant="outlined" fullWidth margin="dense" color="secondary" defaultValue="Deliver to door"/>
              <TextField label="Business Name" variant="outlined" fullWidth margin="dense" color="secondary"/>
              <TextField label="Road No" variant="outlined" fullWidth margin="dense" color="secondary"/>
              <TextField label="Flat, Suite OR Floor" variant="outlined" fullWidth margin="dense" color="secondary"/>
              <TextField label="Add delivery instructor" fullWidth variant="outlined" multiline rows="3" color="secondary" margin="dense"/>
              <Button variant="contained" color="secondary" size="large"  fullWidth className={classes.mainButton}>
                Save & Continue
              </Button>
            </form>
          </Grid>

          <Grid item md={2} xs={0}></Grid>
          
          <Grid item md={4}>
            <h1>Card Item</h1>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;