import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Product from './Product';
// import {} from '@mui';

const useStyle = makeStyles({
  root: {
    paddingTop: 50,
    // paddingBottom: 50,
  },
});

const Products = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="div">
        Chicken
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
