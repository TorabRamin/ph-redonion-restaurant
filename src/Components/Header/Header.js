import React from 'react';
import logo from '../../assets/img/logo2.png';
import {
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  IconButton,
  Button,
  Container,
  Badge
} from '@material-ui/core';
import {
  AccountCircle,
  ShoppingCart
} from '@material-ui/icons';
import {
  makeStyles
} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import './Header.css'


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainBtn: {
    borderRadius: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

const Header = () => {

  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = event => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar disableGutters>
            <div className="logoWrap" >
              <Link to="/">
                <img src={logo} alt={logo} className="logo"/>
              </Link>
            </div>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            <Button className={classes.menuButton}>Login</Button>
            <Button variant="contained" color="secondary" className={classes.mainBtn}>
              SignUP
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;