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

const image_link = "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

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
          results.map((prod,index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Product prod={index<4?{...prod,image_link}:prod} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Products;
