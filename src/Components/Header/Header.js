import React from 'react';
import logo from '../../assets/img/logo2.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
  Badge
} from '@material-ui/core';
import {
  ShoppingCart
} from '@material-ui/icons';
import {
  makeStyles
} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import './Header.css'
import { useAuth } from '../Login/useAuth';


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  mainBtn: {
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  userImg: {
    height: "30px",
    objectPosition: "center",
    objectFit: "cover",
    borderRadius: "40px",
    marginRight: theme.spacing(1),
  }
}));

const Header = (props) => {
  const { cartItems } = props;
  const classes = useStyles();

  const auth = useAuth();
  console.log(auth);

  return (
    <header>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar disableGutters>
            <div className="logoWrap" >
              <Link to="/">
                <img src={logo} alt={logo} className="logo"/>
              </Link>
            </div>
            <Link to="/checkout">
              <IconButton component="div" edge="start" color="inherit" aria-label="menu">
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            
            {
              auth.user ?
                <>
                  <img src={auth.user.photo} className={classes.userImg} alt={auth.user.name}/>
                  <Button onClick={auth.signOut} className={classes.menuButton}>Logout</Button>
                </>
                  :
                <React.Fragment>
                  <Link to="/login">
                    <Button component="div" className={classes.menuButton}>Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button component="div" variant="contained" color="secondary" className={classes.mainBtn}>
                      SignUP
                    </Button>
                  </Link>
                </React.Fragment>
            }

          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;