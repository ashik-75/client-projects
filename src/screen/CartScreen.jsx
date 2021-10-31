import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { addItemToCart, removeItemFromCart } from '../store/addToCart';
import { useGetProductsQuery } from '../store/funApi';
// import { removePostClick } from '../store/removePost';
import DeleteIcon from '@mui/icons-material/Delete';

const CartScreen = () => {
  const [count,setCount] = useState(0)
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state=>state.addToCart)
  const qty = location.search ? Number(location.search.split("=")[1]):1
  const id = Number(params.id);

  const {data,isLoading:loading} = useGetProductsQuery();

  console.log(cartItems,"cartitems")
  
  
  
  useEffect(()=>{
    if(!loading && id){
      const filteredData = data?.find(dt=>dt.id === id);
    
      const final = {
        id: filteredData.id,
        title: filteredData.title,
        price: filteredData.price,
        qty
      }
      console.log("final output: ",final)
      dispatch(addItemToCart(final));
    }
  },[dispatch,id,qty,data,loading])

  const handleCartRemove = (id) =>{
    console.log(id,'here')
    dispatch(removeItemFromCart(id))
  }



  return (
    <div >
      <Grid sx={{p:3}} container spacing={2}>
        <Grid item xs={8}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {cartItems && cartItems.length > 0 ? cartItems.map((prod) => (
            <TableRow
              key={prod.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="prod">
                {prod.title}
              </TableCell>
              <TableCell align="right">{prod.price}</TableCell>
              <TableCell align="right">{prod.qty}</TableCell>
              <TableCell align="right">
                <IconButton  aria-label="delete">
                  <DeleteIcon onClick={()=>handleCartRemove(prod.id)} />
                </IconButton>
              </TableCell>
            </TableRow>
          )): "empty"}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body">
            Total item - 
            {cartItems.reduce((acc,curr)=>acc+curr.qty,0)}
          </Typography>

          <Typography>
            Total Price - 
            {cartItems.reduce((acc,curr)=>acc+curr.price*curr.qty,0)}
          </Typography>
        </Grid>
      </Grid> 
    </div>
  )
}

export default CartScreen
