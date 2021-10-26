import ProductPage from '../productPage/ProductPage';
import './categoryProduct.scss';
import { Link } from 'react-router-dom';
const CategoryProduct = ({ category, url }) => {
  return (
    <div className="categoryProduct">
      <div className="category-hero">
        <div className="left">{category}</div>
        <div className="right">
          <div className="view-all">
            <Link to="/product/watch" className="link">
              <span>View All</span>
            </Link>
            <i class="fas icon-details fa-sort-up"></i>
          </div>
        </div>
      </div>
      <div className="category-products">
        <ProductPage url={url} />
      </div>
    </div>
  );
};

export default CategoryProduct;
