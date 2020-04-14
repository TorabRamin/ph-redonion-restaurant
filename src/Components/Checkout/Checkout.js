import React, {useState} from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../Buttons/BackButton';
import "./Checkout.css"
import CartItem from '../CartItem/CartItem';
import CartDetails from '../CartDetails/CartDetails';
import DeliveryForm from '../Form/DeliveryForm';


const useStyles = makeStyles(theme => ({
  detailsContainer: {
    padding: theme.spacing(8, 0)
  },
  heading: {
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #9b9b9b"
  }
}));



const Checkout = (props) => {
  const { cartItems, removeCart, quantityIncrement, quantityDecrement, clearCart } = props;
  const [formData, setFormData] = useState();
  const onSubmit = ()=> (data) => { setFormData(data) }
  
  const hasFormData = formData && formData.deliveryOption && formData.name && formData.roadNo && formData.flatNo && formData.details


  const classes = useStyles();
  return (
    <Box component='section'>
      <Container>
        <Grid container spacing={4} className={classes.detailsContainer}>
          <Grid item xs={12}>
            <BackButton/>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5" className={classes.heading}>
              Edit Delivery Details
            </Typography>
            <DeliveryForm onSubmit={onSubmit()}/>
          </Grid>

          <Grid item md={2}></Grid>
          
          <Grid item md={4} xs={12}>
            <Typography variant="body1" component="p" gutterBottom>
              Form <strong>Gulshan Plaza Restaura GPR</strong>
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Arriving in 20-30 min
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              107 Rd No 9
            </Typography>
            
            <Box component="div" className={classes.cartItemWrapper}>
              {
                cartItems.map(item => <CartItem item={item} key={item.item.id} removeCart={removeCart} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} hasFormData={hasFormData}/>)
              }
            </Box>
            <CartDetails cartItems={cartItems} hasFormData={hasFormData} clearCart={clearCart}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;