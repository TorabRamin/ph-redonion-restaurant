import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Tabs,
  Tab,
  Typography,
  Box,
  Button
} from '@material-ui/core';
import {FoodCard} from '../Card/Card.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  foodArea: {
    padding: theme.spacing(8, 0)
  },
  moreFood: {
    padding: theme.spacing(1, 4)
  },
  root: {
    '&$disabled': {
      color: 'white',
      background: '#cecece'
    },
  },
  disabled: {}
}));

function FoodArea() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Container className={classes.foodArea}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor= "secondary"
          centered
        >
          <Tab label="Breakfast" {...a11yProps(0)} />
          <Tab label="Lunch" {...a11yProps(1)} />
          <Tab label="Dinner" {...a11yProps(2)} />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container>
            <Grid item md={4}>
              <FoodCard />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      <Grid container justify="center">
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.moreFood}
            classes={{
              root: classes.root,
              disabled: classes.disabled
            }}
            disabled
          >Checkout Your Food</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default FoodArea;