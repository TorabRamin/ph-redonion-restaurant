import React from 'react';
import { Box, Grid, Container, Link } from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';
import './FooterBottm.css'

const useStyles = makeStyles((theme) => ({
  copyright_text: {
    margin: 'auto'
  }
}));

const FooterBottom = () => {
  const classes = useStyles();
  return (
    <Box component="div" className="footer-bottom">
      <Container>
        <Grid container >
          <Grid item xs className={classes.copyright_text}>
            {'Copyright © '}
            <Link color="inherit" target="_blank" href="https://meetramin.com/">
              Torab Ramin
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Grid>
          <Grid item xs align="right">
            <ul>
              <li><a href="#">Privacy Policy.</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterBottom;