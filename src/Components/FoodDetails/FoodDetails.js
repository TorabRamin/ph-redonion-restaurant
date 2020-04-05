import React, {useState} from 'react';
import { Container, Grid, Typography, Button, Box, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useParams} from "react-router-dom";
import foodData from '../../fakeData/foodsData';
import BackButton from '../Buttons/BackButton';

const useStyles = makeStyles(theme => ({
  mainBtn: {
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  bodyText: {
    lineHeight: 2.3
  },
  detailsContainer: {
    padding: theme.spacing(8, 0)
  },
  media: {
    objectFit: 'contain'
  },
  priceWrap: {
    padding: theme.spacing(3, 0)
  },
  heading: {
    marginBottom: theme.spacing(3)
  },
  cardButtonWrapper: {
    padding: "8px 14px",
    border: "1px solid #ddd",
    borderRadius: "40px"
  },
  icon: {
    cursor: "pointer",
    '&:hover': { 
      color: '#dc004e'
    }
  },
  anchor: {
    textDecoration: 'none',
    color: '#000'
  }
}));



const FoodDetails = () => {
  
  const classes = useStyles();
  const { itemId } = useParams();
  // eslint-disable-next-line
  const item = foodData.find(item => item.id == itemId);
  const { name, images, price, fullDescription } = item;

  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  }
  const decrement = () => {
    if (quantity ===1) return
    setQuantity(quantity - 1);
  }

  const addToCart = () => {
    const addToCart = price * quantity;
    console.log(addToCart);
  }


  return (
    <Box component='section'>
      <Container>
        <Grid container spacing={4} className={classes.detailsContainer}>
          <Grid item xs={12}>
            <BackButton/>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3" className={classes.heading}>
              {name}
            </Typography>
            <Typography variant="body1" className={classes.bodyText}>
              {fullDescription}
            </Typography>
            <Grid container spacing={2} className={classes.priceWrap}>
              <Grid item>
                <Typography variant="h4">
                  ${price}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify="center" className={classes.cardButtonWrapper}>
                  <RemoveIcon className={classes.icon} onClick={()=> decrement()}/>
                  <Typography style={{ padding: '0 12px'}}>{quantity}</Typography>
                  <AddIcon className={classes.icon} onClick={()=> increment()}/>
                </Grid>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.mainBtn}
              startIcon={<ShoppingCartIcon />}
              onClick={()=> addToCart()}
            >
              Add
            </Button>
          </Grid>

          <Grid item md={6}>
            <CardMedia
              className={classes.media}
              image={images[0]}
              title="Contemplative Reptile"
              component="img"
              height= '500'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FoodDetails;