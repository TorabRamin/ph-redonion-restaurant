import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    '&$disabled': {
      color: 'white',
      background: '#cecece'
    },
  },
  disabled: {},
  orderBtn: {
    marginTop: theme.spacing(3)
  }
}));

const CardDetails = (props) => {
  const classes = useStyles();
  
  const {cartItems, hasFormData, clearCart}=props
  
  const subTotal = cartItems.reduce((acc, currentItem) => acc + (currentItem.item.price * currentItem.quantity), 0);
  const vat = Math.round(subTotal * 0.15)
  const deliveryFee = cartItems.length < 3 ? 5 : 0
  const grandTotal = Math.round(subTotal + vat + deliveryFee)
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Subtotal • {
            props.cartItems.length < 2 ? `${props.cartItems.length} Item` : `${props.cartItems.length} Items`
          }
        </Typography>
      </Grid>
      <Grid item xs={6} align="right">
        <Typography variant="subtitle1">
          ${
            subTotal
          }
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Vat 15%
        </Typography>
      </Grid>
      <Grid item xs={6} align="right">
        <Typography variant="subtitle1">
          ${vat}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Delivery Fee
        </Typography>
      </Grid>
      <Grid item xs={6} align="right">
        <Typography variant="subtitle1">
          ${deliveryFee}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <hr />
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h6">
          Total
        </Typography>
      </Grid>
      <Grid item xs={6} align="right">
        <Typography variant="h6">
          ${grandTotal}
        </Typography>
      </Grid>
      <Button
        component={Link} 
        to={'/tracking'}
        variant="contained"
        color="secondary"
        size="large"
        className={classes.orderBtn}
        classes={{
          root: classes.root,
          disabled: classes.disabled
        }}
        fullWidth
        disabled={!hasFormData}
        onClick={clearCart()}
      >Place Order</Button>

    </Grid>
  );
};

export default CardDetails;