import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  nav: {
    // marginBottom: 200,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2a9d8f',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 20,
    color: 'white',
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.nav}>
      <Toolbar className={classes.container}>
        <div className={classes.left}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="link">
            <Typography variant="h6" component="div" noWrap>
              Shop
            </Typography>
          </Link>
        </div>
        <div className={classes.right}>
          <Link to="/product/cart" className="link">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
