import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1623888885364-56cf1a38b6ad?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/product/1" className="link">
            <Button size="small">See Details</Button>
          </Link>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
