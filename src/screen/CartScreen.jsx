import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { addItemToCart } from '../store/addToCart';
import { removePostClick } from '../store/removePost';

const CartScreen = () => {
  const [count,setCount] = useState(0)
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state=>state.addToCart)
  const qty = location.search ? Number(location.search.split("=")[1]):1
  const id = Number(params.id);



  useEffect(()=>{
    if(id){
      dispatch(addItemToCart(id,qty));
    }
  },[dispatch,id,qty])

  useEffect(()=>{
    dispatch(removePostClick(count))
  },[dispatch,count])



  return (
    <div>

      <ul>
        {cartItems.length > 0? cartItems.map(dt=>(
          <li key={dt.id}>{dt.title} - {dt.qty}</li>

        ) ):"cart is empty"}
      </ul>

      <Button sx={{m:3}} variant="contained" onClick={()=>setCount(prev=>prev+1)}>number - {count}</Button>



      
    </div>
  )
}

export default CartScreen
