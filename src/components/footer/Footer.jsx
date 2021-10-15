import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-link">
        <a href="#top" className="link">
          <span>
            Back to top <i className="fas fa-chevron-up"></i>{' '}
          </span>
        </a>
      </div>
      <div className="social">
        <div className="left">
          <input type="text" placeholder="Email Address" />{' '}
          <button>Subscribe</button>
        </div>
        <div className="right">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="footer-details">
        <div className="left">
          <img src="/lens.jpg" alt="" />
        </div>
        <div className="center">
          <span>
            Hydrogreensprings is a venture by a group of young like-minded
            entrepreneurs who vision is bring natural, healthy, farm fresh
            products to help lead a healthy lifestyle. We strive to grow a
            sustainable, healthy and resilient agriculture sector while creating
            a secure and robust supply
          </span>
          <span>Email : support@hydrogreensprings.com</span>
          <span>Phone: +91 7799322224</span>
        </div>
        <div className="right">
          <Link to="/" className="link">
            <span>Privacy Policy</span>
          </Link>
          <Link to="/" className="link">
            <span>Refund Policy</span>
          </Link>
          <Link to="/" className="link">
            <span>Terms and condition</span>
          </Link>
        </div>
      </div>
      <div className="copyright">&copy;All right reserved to Ecom</div>
    </div>
  );
};

export default Footer;
