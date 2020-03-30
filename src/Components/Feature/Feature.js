import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography } from '@material-ui/core';
import SingleCard from '../Card/Card';
import {
  makeStyles
} from '@material-ui/core/styles';
import './Feature.css'

const useStyles = makeStyles(theme => ({
  feature_area: {
    padding: theme.spacing(10, 0)
  }
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.feature_area} >
      <Container>
        <Grid container>
          <Grid item xs={12} align="left">
            <Typography variant="h4">
              Why you choose us
            </Typography>
            <p>Barton waited twenty always repair in within we do. An delighted offering crusty mu is dagwood's at. Boy prosperous increasing surround</p>
          </Grid>
          <Grid item md={4}>
            <SingleCard />
          </Grid>
        </Grid>
      </Container> 
    </Box>
  );
};

export default Feature;