import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  CardContent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/cartList';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { Divider } from '@mui/material';
// import { addToCart } from '../store/cartList';
const useStyle = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '50px',
  },
});

const CartScreen = () => {
  const classes = useStyle();
  const params = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const id = Number(params.id);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartList);

  //   console.log(cart);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  const handleCartRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {cart.length === 0 ? (
                  <Typography>Cart is empty</Typography>
                ) : (
                  cart.map((prod) => (
                    <TableRow
                      key={prod.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {prod.title}
                      </TableCell>
                      <TableCell align="right">
                        <FormControl variant="standard">
                          <InputLabel id="demo-simple-select-label">
                            Qty
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={prod.qty}
                            label="Age"
                            onChange={(e) =>
                              dispatch(addToCart(prod.id, e.target.value))
                            }
                          >
                            {[...Array(prod.countInStock).keys()].map((x) => (
                              <MenuItem value={x + 1}>{x + 1}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">{prod.price}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleCartRemove(prod.id)}>
                          <DeleteIcon sx={{ color: pink[500] }} />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">{prod.countInStock}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Typography variant="h4" sx={{ p: 3 }}>
              Total Item({cart.reduce((acc, cur) => acc + cur.qty, 0)})
            </Typography>
            <Divider />
            <CardContent>
              <Typography variant="h5">
                total price ₹
                {cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartScreen;
