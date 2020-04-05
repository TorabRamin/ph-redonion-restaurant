import React from 'react';
import logo from '../../assets/img/logo.png';
import {
  Link
} from "react-router-dom";
import {
  Grid,
  Box,
  Container
} from '@material-ui/core';


const FooterTop = () => {
  return (
    <Box component="section" className="footer-top">
      <Container>
        <Grid container>
          <Grid item md={6}>
            <img src={logo} alt="Logo" />
          </Grid>
          <Grid item md={3}>
            <ul>
                <li><Link to="/about">About Online Food</Link></li>
                <li><Link to="/blog">Read Our Blog</Link></li>
                <li><Link to="/login">Sign up to deliver</Link></li>
                <li><Link to="/about">Add your restaurant</Link></li>
            </ul>
          </Grid>
          <Grid item md={3}>
            <ul>
                <li><Link to="/help">Get Help</Link></li>
                <li><Link to="/faq">Read FAQ</Link></li>
                <li><Link to="/cities">View All Cities</Link></li>
                <li><Link to="/nearme">Restaurants near me</Link></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterTop;