import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/productList';
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
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  console.log({ products, loading, error });
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="div">
        Chicken
      </Typography>
      <Grid container spacing={2}>
        {error ? (
          <Typography>{error}</Typography>
        ) : loading ? (
          'loading'
        ) : (
          products.length > 0 &&
          products.map((prod) => (
            <Grid key={prod.id} item xs={12} sm={6} md={4} lg={3}>
              <Product prod={prod} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Products;
