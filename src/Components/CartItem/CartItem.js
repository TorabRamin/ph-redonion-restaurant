import React from 'react';
import { Box, Grid, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles(theme => ({
  cartItem: {
    background: "#f5f5f5",
    padding: theme.spacing(2),
    borderRadius: "20px",
    boxShadow: "3px 6px 10px #e4e4e4",
    position: 'relative',
    marginBottom: "15px",
    // '&:last-child': {
    //   marginBottom: '0px'
    // }
  },
  itemQuantity: {
    boxShadow: "3px 6px 10px #eaeaea",
    borderRadius: "10px",
    padding: '12px', background: '#fff',
    fontWeight: '800',
    fontSize: '18px'
  },
  icon: {
    margin: 'auto',
    cursor: "pointer",
    '&:hover': {
      color: '#dc004e'
    }
  },
  itemTitle: {
    fontWeight: '600'
  },
  removeButton: {
    cursor: "pointer",
    color: '#727980'
  }

}));
const CartItem = (props) => {
  const classes = useStyles();
  const {removeCart, quantityIncrement, quantityDecrement} = props;
  const {name, images, price, id} = props.item.item

  return (
    <Box component="div" className={classes.cartItem}>
      <Grid
        container
        justify = "center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs>
          <CardMedia
            component="img"
            width='100px'
            image = {images[0]}
            title={name}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" component="h3" className={classes.itemTitle}>
            {name}
          </Typography>
          <Typography variant="h5" color="secondary">
            ${price}
          </Typography>
          <Typography variant="body2" className={classes.removeButton} onClick={removeCart(id)}>
            Remove
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container align="center" justify="center" className={classes.cardButtonWrapper}>
            <RemoveIcon className={classes.icon} onClick={quantityDecrement(id)}/>
            <Typography className={classes.itemQuantity}>{props.item.quantity}</Typography>
            <AddIcon className={classes.icon} onClick={quantityIncrement(id)}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;