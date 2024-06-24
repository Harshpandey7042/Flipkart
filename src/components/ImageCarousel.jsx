import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  const images = [
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/80f7536bb5b62d3f.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/77e402bbfdae0e68.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/77e402bbfdae0e68.jpg?q=20',
  ];

  return (
    <div className="w-full my-4">
      <div className="w-full">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ height: '268.21px', objectFit: 'contain' }}
                className="w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
