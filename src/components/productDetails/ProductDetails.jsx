import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';
import { List, Typography } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useGetProductQuery, useGetProductsQuery } from '../../store/funApi';
import { loadProduct } from '../../store/singleProduct';
import './productDetails.scss';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1615485291234-9d694218aeb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJvY2NvbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606585333304-a7fa1ca4376c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyb2Njb2xpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyb2Njb2xpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const useStyle = makeStyles((theme) => ({
  mainImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '5px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '40px',
    fontFamily: `'Lobster', cursive`,
    letterSpacing: 2,
    marginBottom: '10px',
  },
  list: {
    paddingTop: 50,
    listStyleType: 'none',
    // '&:hover': {
    //   color: 'red',
    // },
  },
  listItem: {
    width: 200,
    // background: 'red',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 18,
  },
  lastItem: {
    // background: 'red',
    width: 250,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    marginTop: 50,
  },
  imageContainer: {
    // background: 'blue',
  },
  previewImage: {
    width: '100%',
    height: 150,
    opacity: 0.7,
    cursor: 'pointer',
    objectPosition: 'center',
    objectFit: 'cover',

    padding: 5,
  },
  grid: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  },
  active: {
    border: '5px solid green',
  },
}));

const ProductDetails = () => {
  const classes = useStyle();
  const [activeImage, setActiveImage] = useState([true, false, false]);
  const [activeImageUrl, setActiveImageUrl] = useState("");
  const [qty, setQty] = useState(1);
  const params = useParams();
  const history = useHistory();
  const id = Number(params.id);


  const {data,isError:error,isLoading:loading} = useGetProductsQuery()

  const image_link = "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  const product = data?.find(dt=>dt.id === id)



  const handleCart = () => {
    const dt = `/product/${id}/cart?qty=${qty}`;
    history.push(dt);
  };


  return (
    <>

    <div className="productDetails">
      {error ? (
        <Typography variant="h4">Error...</Typography>
      ) : loading ? (
        <Typography variant="h4">loading...</Typography>
      ) : (
        <div className="main-product-details">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    className={classes.mainImage}
                    src={activeImageUrl || product.image_link}
                    alt=""
                  />
                </Grid>
              </Grid>
              <Grid container>
                
                  <Grid  xs={4} className={classes.grid}>
                    <img

                      className={`${classes.previewImage} `}
                      src={product.image_link}
                      onMouseOver={()=>setActiveImageUrl(product.image_link)}
                      alt=""
                    />
                  </Grid>
                  <Grid  xs={4} className={classes.grid}>
                    <img

                      className={`${classes.previewImage} `}
                      src={product.image_link_1}
                      onMouseOver={()=>setActiveImageUrl(product.image_link_1)}
                      alt=""
                    />
                  </Grid>
                  <Grid  xs={4} className={classes.grid}>
                    <img
                      className={`${classes.previewImage}`}
                      src={product.image_link_2}
                      onMouseOver={()=>setActiveImageUrl(product.image_link_2)}
                      alt=""
                    />
                  </Grid>
                
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.title}>{product.title}</div>
              <Typography variant="body1">{product.description}</Typography>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <span>Price</span>
                  <span>₹{product.price}</span>
                </li>
                <li className={classes.listItem}>
                  <span>Size</span>
                  <Button variant="outlined">1kg</Button>
                </li>
                <li className={classes.listItem}>
                  <span>Quantity</span>
                  <span>
                    {' '}
                    <FormControl variant="standard">
                   
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={qty}
                      
                        onChange={(e) => setQty(e.target.value)}
                        
                      >
                        {[...Array(10).keys()].map((x) => (
                          <MenuItem value={x + 1}>{x + 1}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>{' '}
                  </span>
                </li>
              </ul>

              <div className={classes.buttons}>
                <Button sx={{ mr: 3 }} onClick={handleCart} variant="outlined">
                  Add to Cart
                </Button>
                <Button variant="outlined" color="success">
                  Buy it Now
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
    </>
  );
};

export default ProductDetails;
