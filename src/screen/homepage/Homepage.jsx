import Sliders from '../../components/sliders/Sliders';
import './homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sliders-container">
        <Sliders />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Homepage;
