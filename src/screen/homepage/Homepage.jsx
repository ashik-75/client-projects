import { Button, CardActionArea } from '@mui/material';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Sliders from '../../components/sliders/Sliders';
import products from '../../products';
import { loadProducts } from '../../store/productList';
import { Link } from 'react-router-dom';

import './homepage.scss';
import Products from '../../components/Products';

const Homepage = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="slide">
        <Sliders />
      </div>

      <div className="show-products">
        <Products />
      </div>

      <div className="show-products">
        <Products />
      </div>

      <div className="show-products">
        <Typography variant="h4">Show all the products</Typography>
        {products.map((prod) => (
          <Card key={prod.id} sx={{ mb: 4 }}>
            <CardContent>{prod.title}</CardContent>
            <CardContent>{prod.price}</CardContent>
            <Link to={`/product/${prod.id}`}>
              <Button sx={{ m: 3 }} variant="contained">
                Details
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
