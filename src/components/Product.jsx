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

const Product = ({ prod }) => {
  const classes = useStyle();
  return (
    <div >
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={prod.image_link}
          alt="green iguana"
        />
        <CardContent className={classes.cont}>
          <Typography gutterBottom variant="h5" component="div">
            {prod.title} - {prod.category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ₹{prod.price}
          </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Link to={`/product/${prod.id}`} className="link">
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
