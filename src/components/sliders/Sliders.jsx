import { useState } from 'react';
import './sliders.scss';
const topRatedData = [1, 2, 3, 4];

const Sliders = () => {
  const [slide, setSlide] = useState(0);
  const length = topRatedData.length;

  const handleSlide = (way) => {
    way === 'right'
      ? setSlide(slide < length - 1 ? slide + 1 : slide)
      : setSlide(slide > 0 ? slide - 1 : slide);
  };

  return (
    <div className="sliders-content-container">
      <div
        className="sliders"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {topRatedData.map((dt) => (
          <div
            className="slider"
            style={{
              background: `url('/lens.jpg') no-repeat center center/cover`,
            }}
          >
            <div className="slider-container">
              <h3>Nicon Camera</h3>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <i
        className="fas fa-chevron-left icon"
        onClick={() => handleSlide('left')}
      ></i>
      <i
        className="fas fa-chevron-right icon"
        onClick={() => handleSlide('right')}
      ></i>
    </div>
  );
};

export default Sliders;
