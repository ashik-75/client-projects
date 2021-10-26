import { Button, CardActionArea } from '@mui/material';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';
import Sliders from '../../components/sliders/Sliders';
import products from '../../products';
import { loadProducts } from '../../store/productList';
import { Link } from 'react-router-dom';

import './homepage.scss';

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
      <CategoryProduct
        category="Vegetable"
        url="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <CategoryProduct
        category="Chicken"
        url="https://images.unsplash.com/photo-1610057098265-05f2bcbedd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />

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
