import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';
import { List, Typography } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  const [activeImageUrl, setActiveImageUrl] = useState(images[0].url);
  const [qty, setQty] = useState(1);
  const params = useParams();
  const history = useHistory();
  const id = params.id;
  const handleActiveImage = (index) => {
    const newdata = activeImage.map((dt, ind) =>
      ind === index ? true : false
    );

    setActiveImage(newdata);
  };

  console.log('activeImage', activeImage);

  const handleCart = () => {
    const dt = `/product/${id}/cart?qty=${qty}`;
    history.push(dt);
  };
  return (
    <div className="productDetails">
      <div className="main-product-details">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <img
                  className={classes.mainImage}
                  src={activeImageUrl}
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid container>
              {activeImage.map((dt, ind) => (
                <Grid key={ind} xs={4} className={classes.grid}>
                  <img
                    onMouseOver={() => {
                      setActiveImageUrl(images[ind].url);
                      const newData = activeImage.map((dt, i) =>
                        i === ind ? true : false
                      );
                      setActiveImage(newData);
                    }}
                    className={`${classes.previewImage} ${
                      activeImage[ind] && classes.active
                    }`}
                    src={images[ind].url}
                    alt=""
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.title}>Broccoly</div>
            <Typography variant="body1">
              Libero volutpat sed cras ornare arcu dui vivamus arcu. Interdum
              consectetur libero id faucibus nisl tincidunt eget nullam. Libero
              justo laoreet sit amet. Sit amet consectetur adipiscing elit
              pellentesque habitant.
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <span>Price</span>
                <span>₹344</span>
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
                    {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={qty}
                      // label="Number"
                      onChange={(e) => setQty(e.target.value)}
                      // onChange={handleChange}
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
    </div>
  );
};

export default ProductDetails;
