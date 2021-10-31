import { Button, CardActionArea } from '@mui/material';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Sliders from '../../components/sliders/Sliders';
import products from '../../products';
import { loadProducts } from '../../store/productList';
import { Link } from 'react-router-dom';

import './homepage.scss';
import Products from '../../components/Products';
import Search from '../../components/Search';
import { makeStyles } from '@mui/styles';
import { Transform } from '@mui/icons-material';

const useStyle = makeStyles((theme)=>({
  search: {
    marginLeft: "30%",
    // transform: `translateX(-50%)`,
    marginTop: 50
  }


}))

const Homepage = () => {
  const classes = useStyle()
  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("");


  return (
    <div className="homepage">
      {!search && (

      <div className="slide">
        <Sliders />
      </div>
      )}


      <div className={classes.search} sx={{ mt: 5}}>
        <Search search={search} category={category} setCategory={setCategory} setSearch={setSearch} />
      </div>

      <div className="show-products">
        <Products search={search} category={category} />
      </div>


    </div>
  );
};

export default Homepage;
