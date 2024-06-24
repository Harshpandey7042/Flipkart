import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample images for each category (you can replace these with actual image URLs)
const categoryImages = {
  Grocery: 'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100',
  Mobiles: 'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100',
  Fashion: 'https://rukminim2.flixcart.com/fk-p-flap/192/192/image/0d75b34f7d8fbcb3.png?q=100',
  Electronics: 'https://rukminim2.flixcart.com/flap/192/192/image/69c6589653afdb9a.png?q=100',
  'Home & Furniture': 'https://rukminim2.flixcart.com/flap/192/192/image/ab7e2b022a4587dd.jpg?q=100',
  Appliances: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100',
  Travel: 'https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100',
  'Beauty, Toys & More': 'https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100',
  'Two Wheelers': 'https://rukminim2.flixcart.com/fk-p-flap/192/192/image/05d708653beff580.png?q=100',
};

const categories = [
  { label: 'Grocery', imgSrc: categoryImages.Grocery },
  { label: 'Mobiles', imgSrc: categoryImages.Mobiles },
  { label: 'Fashion', imgSrc: categoryImages.Fashion },
  { label: 'Electronics', imgSrc: categoryImages.Electronics },
  { label: 'Home & Furniture', imgSrc: categoryImages['Home & Furniture'] },
  { label: 'Appliances', imgSrc: categoryImages.Appliances },
  { label: 'Travel', imgSrc: categoryImages.Travel },
  { label: 'Beauty, Toys & More', imgSrc: categoryImages['Beauty, Toys & More'] },
  { label: 'Two Wheelers', imgSrc: categoryImages['Two Wheelers'] },
];

const Navbar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <div className="bg-white text-black p-4 shadow">
      <div className="container mx-auto hidden lg:flex flex-wrap justify-around">
        {categories.map((category) => (
          <NavItem key={category.label} label={category.label} imgSrc={category.imgSrc} />
        ))}
      </div>
      <div className="container mx-auto lg:hidden">
        <Slider {...settings}>
          {categories.map((category) => (
            <NavItem key={category.label} label={category.label} imgSrc={category.imgSrc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NavItem = ({ label, imgSrc }) => {
  return (
    <div className="flex flex-col items-center mx-2 cursor-pointer hover:text-blue-600">
      <img src={imgSrc} alt={label} className="h-12 w-12 object-contain mb-1" />
      <span className="text-sm">{label}</span>
      <FontAwesomeIcon icon={faChevronDown} className="mt-1" />
    </div>
  );
};

export default Navbar;
