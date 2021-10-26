import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import products from '../products';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  cont: {
    padding: '50px',
    height: '100vh',
    transition: 'none',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
}));

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const params = useParams();

  const id = Number(params.id);

  useEffect(() => {
    const product = products.find((prod) => prod.id === id);

    setProduct(product);
  }, []);

  const handleCart = () => {
    console.log('cart', qty);
    history.push(`/product/${id}/cart?qty=${qty}`);
  };

  console.log(product);

  const classes = useStyle();
  return (
    <div className={classes.cont} style={{ paddingTop: 100 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link to="/">Go Back</Link>
          <img className={classes.img} src={product.image} alt="" />
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ pb: 3 }} variant="h4">
            {product.title}
          </Typography>
          <Divider />
          <Typography sx={{ py: 2 }} variant="h5">
            ₹{product.price}({product.weight})
          </Typography>
          <Divider />
          <Typography sx={{ py: 5 }} variant="p" component="p">
            {product.desc}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              In Stock
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              autoWidth
              label="Age"
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <MenuItem key={x} value={x + 1}>
                  {x + 1}
                </MenuItem>
              ))}
            </Select>
            <Button onClick={handleCart} sx={{ mt: 2 }} variant="contained">
              Add to Cart
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
