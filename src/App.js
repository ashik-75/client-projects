import React from 'react';
import Homepage from './screen/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ProductPage from './components/productPage/ProductPage';
import Mui from './screen/mui/Mui';
import Navbar from './components/Navbar';
// import ProductDetails from './screen/ProductDetails';
import AddProduct from './screen/AddProduct';
import CartScreen from './screen/CartScreen';
import ScrollTop from './components/ScrollTop';
import ProductDetails from './components/productDetails/ProductDetails';
import TestScreen from './screen/TestScreen';

const App = () => {
  return (
    <Router>
      <ScrollTop>
        <Navbar />
        <main>
          <Switch>
          <Route path="/testing">
              <TestScreen />
            </Route>
            <Route path="/product/:id?/cart">
              <CartScreen />
            </Route>
            <Route path="/product/add" exact>
              <AddProduct />
            </Route>
            <Route path="/product/:id/">
              <ProductDetails />
            </Route>
            <Route path="/product/:category/category">
              <ProductPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </ScrollTop>
    </Router>
  );
};

export default App;
