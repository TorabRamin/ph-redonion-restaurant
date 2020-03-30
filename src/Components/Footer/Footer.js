import React from 'react';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom';
import './Footer.css'
import { Box } from '@material-ui/core';

const Footer = () => {
  return (
    <Box component='footer'>
      <FooterTop />
      <FooterBottom />
    </Box>
  );
};

export default Footer;