import './cart.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const [active, setActive] = useState(false);
  console.log(active ? 'active' : 'not active');
  return (
    <div className="cart">
      <div className="level-1">
        <span>Your Order</span>
        <Link to="/cart">
          <span>View Cart</span>
        </Link>
      </div>
      <div className="level-2">
        <span>Subtotal: </span>
        <span>Rs. 220.00</span>
      </div>
      <div className="level-3">
        <span>Add a note to your order</span>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <div>
          Taxes and <span className="marks">shipping</span> calculated at
          checkout
        </div>
      </div>
      <button>Checkout</button>
      <div className="level-4" onClick={() => setActive((dt) => !dt)}>
        <div className="level-4-title">
          <h3>Products(4)</h3>
          <i className={`fas fa-chevron-down ${active && 'active'}`}></i>
        </div>
        <div className={active ? 'products active' : 'products'}>
          <div className="product">
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="right">
              <span className="title">
                Capsicum Yellow Big - 500 gms Rs. 168.00
              </span>
              <div className="quantity-cont">
                <span className="quantity">
                  <span>+</span>
                  <span>2</span>
                  <span> - </span>
                </span>
                <span className="remove">Remove</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
