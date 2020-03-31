import React, {
  useState,
  useEffect
} from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography } from '@material-ui/core';
import SingleCard from '../Card/Card';
import {
  makeStyles
} from '@material-ui/core/styles';
import featuresData from '../../fakeData/featuresData'
import './Feature.css'

const useStyles = makeStyles(theme => ({
  feature_area: {
    padding: theme.spacing(10, 0)
  }
}));

const Feature = () => {
  const classes = useStyles();
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(featuresData);
  }, [])
  console.log(features);
  
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
          {
            features.map(feature => (
              <Grid item md={4}>
                <SingleCard key={feature.id} feature={feature} />
                {console.log(feature)}
              </Grid>
            ))
          }
          <Grid item md={4}>
            <SingleCard />
          </Grid>
        </Grid>
      </Container> 
    </Box>
  );
};

export default Feature;