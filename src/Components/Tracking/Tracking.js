import React from 'react';
import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
import map from '../../assets/img/ordercomplete.png'
import rider from '../../assets/img/rider.png'
import rider2 from '../../assets/img/rider2.png'
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: theme.spacing(8, 0)
  },
  mapContainer: {
    width: '100%',
    borderRadius: "20px"
  },
  deliveryInfoWrapper: {
    background: "#f5f5f5",
    borderRadius: "20px",
    padding: theme.spacing(3)
  },
  riderContainer: {
    width: "100px",
    marginLeft: "40px",
    marginBottom: "5px"
  },
  itemWrapper: {
    background: 'white',
    borderRadius: '10px',
    padding: theme.spacing(2),
  },
  addressBox: {
    '& div': {
      marginBottom: theme.spacing(2)
    },
    '& div:last-child': {
      marginBottom: "0"
    }
  },
  rider2Container: {
    width: '100%'
  }
  
}));

const Tracking = () => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={4} className={classes.mainContainer}>
          <Grid item md={7}>
            <img src={map} alt="map" className={classes.mapContainer} />
          </Grid>
          <Grid item md={1}></Grid>
          
          <Grid item md={4}>
            <Box component="div" className={classes.deliveryInfoWrapper}>
              <img src={rider} alt="rider" className={classes.riderContainer} />
              <Grid container>
                <Grid container className={classNames(classes.itemWrapper, classes.addressBox)}>
                  <Grid item xs={12}>
                    <Typography variant="body1" component="h3">
                      Your Location
                    </Typography>
                    <Typography variant="subtitle2" component="p" style={{color:"#757475"}}>
                      107 Rd No 8
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" component="h3">
                      Shop Address
                    </Typography>
                    <Typography variant="subtitle2" component="p" style={{color:"#757475"}}>
                      Gulshan Plaza Restaura GPR
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item style={{margin: '15px 0'}}>
                  <Typography variant="h4" component="h3">
                    09:30
                  </Typography>
                  <Typography variant="subtitle2" component="p" style={{color:"#757475"}}>
                    Estimated Delivery
                  </Typography>
                </Grid>

                <Grid container className={classes.itemWrapper} alignItems="center">
                  <Grid item xs={3} style={{paddingRight: "10px"}}>
                    <img src={rider2} alt="rider2" className={classes.rider2Container} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body1" component="h3">
                      Ramin
                    </Typography>
                    <Typography variant="subtitle2" component="p" style={{color:"#757475"}}>
                      Your Raider
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{marginTop: "20px"}}>
                  <Button variant="contained" color="secondary" size="large"  fullWidth className={classes.mainButton}>
                    Contact
                  </Button>
                </Grid>

              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tracking;