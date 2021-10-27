import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  cont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // background: 'red',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

const Product = () => {
  const classes = useStyle();
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1553175005-a1129d5c188c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJvY2NvbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent className={classes.cont}>
          <Typography gutterBottom variant="h5" component="div">
            Broccoli
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ₹344
          </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Link to="/product/1" className="link">
            <Button variant="outlined" size="small">
              See Details
            </Button>
          </Link>
          <Button color="success" variant="outlined" size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
