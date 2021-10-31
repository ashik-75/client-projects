import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../store/funApi';
import { loadProducts } from '../store/productList';
import Product from './Product';
// import {} from '@mui';

const useStyle = makeStyles({
  root: {
    paddingTop: 50,
    // paddingBottom: 50,
  },
});

const Products = ({search,category}) => {
  const classes = useStyle();
  const {data:products,isLoading:loading,isError:error} = useGetProductsQuery();
  const [results,setResults] = useState([]);

  console.log("category",category)

  useEffect(()=>{
    if(products){

      if(search && category){
        const newData = products.filter(prod => prod.category.toLowerCase().includes(category) && prod.title.toLowerCase().includes(search.toLowerCase()));
  
        setResults(newData)
      }
      else if(search){
        const newData = products.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()));
  
        setResults(newData)
      }else if(category){
        const newData = products.filter(prod => prod.category.toLowerCase().includes(category.toLowerCase()));
        console.log(category)
        setResults(newData)
      }
      else{
        setResults(products)
      }
    }
  },[search,loading,category])


console.log(results);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {error ? (
          <Typography>{error}</Typography>
        ) : loading ? (
          'loading'
        ) : (
          results &&
          results.length > 0 &&
          results.map((prod) => (
            <Grid key={prod.id} key={prod.id} item xs={12} sm={6} md={4} lg={3}>
              <Product prod={prod} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Products;
