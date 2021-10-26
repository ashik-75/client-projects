import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './productDetails.scss';

const images = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/photos/two-raw-chicken-breast-on-white-backdrop-picture-id93456470?b=1&k=20&m=93456470&s=170667a&w=0&h=-LsQSUrmIrIHl4_-CX8lEkA7ywHf-mK6PF4YAkfVtFk=',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmF3JTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhdyUyMGNoaWNrZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const ProductDetails = () => {
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

  const handleCart = () => {
    const dt = `/product/${id}/cart?qty=${qty}`;
    // console.log('cart edde', dt);
    history.push(dt);
  };
  return (
    <div className="productDetails">
      <div className="productDetails-container">
        <div className="left-image">
          <img src={activeImageUrl} alt="" />
          <div className="image-sub-container">
            <img
              className={activeImage[0] && 'active'}
              onMouseOver={() => {
                handleActiveImage(0);
                setActiveImageUrl(images[0].url);
              }}
              src={images[0].url}
              alt=""
            />
            <img
              className={activeImage[1] && 'active'}
              onMouseOver={() => {
                handleActiveImage(1);
                setActiveImageUrl(images[1].url);
              }}
              src={images[1].url}
              alt=""
            />
            <img
              onMouseOver={() => {
                handleActiveImage(2);
                setActiveImageUrl(images[2].url);
              }}
              className={activeImage[2] && 'active'}
              src={images[2].url}
              alt=""
            />
          </div>
        </div>
        <div className="right-text">
          <div className="title">
            Boneless Skinless Chicken Breasts (6 Frozen Packages)
          </div>
          <div className="price">₹345</div>
          <div className="divider"></div>
          <div className="bundle-details">
            <span>Bundle Details: </span>5 packages of fully cooked, frozen,
            organic sausages. 20 links per bundle.
          </div>
          <div className="about">
            <span>About</span>
            Organic Smart Chicken Uncured Chicken Frankfurters are a healthier
            alternative to beef and pork sausage with less fat, fewer calories,
            and no nitrates, nitrites, or MSG. Perfectly seasoned, these
            delicious, fully cooked sausages add healthful, flavorful protein to
            your favorite dishes. Organic Smart Chickens are exclusively fed a
            certified organic, certified non-GMO diet, and are never given
            antibiotics, hormones, or animal by-products. The program is
            certified humane by HFAC (Humane Farm Animal Care) and every chicken
            is free to roam, with access to outdoor pastures. All Smart Chicken
            is pure air chilled, without added water. The result is the
            best-tasting, highest-quality fresh chicken on the market. Hatched,
            Raised & Harvested in the USA Gluten Free Casing Free No Nitrates or
            Nitrites Certified Organic Certified Humane Non-GMO Project Verified
            Free Range Pure Air-Chilled No Antibiotics EVER
          </div>

          <div className="quantity">
            <span>Quantity</span>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
            <button onClick={handleCart}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
