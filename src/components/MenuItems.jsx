import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    name: "Laptop",
    price: "₹50,000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.bYWJ7uRMl9AyZCzcerYl-gHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Smartphone",
    price: "₹30,000",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.oAIxA0fr7zzrxI_y2YP_eAHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Headphones",
    price: "₹3,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.E0HqFb3QUflcVW2tgRROUwHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Smartwatch",
    price: "₹5,000",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Jnf7NqDnwly50SGkQfokswHaIV&pid=Api&P=0&h=180",
  },
  {
    name: "Camera",
    price: "₹25,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.YTqPQMspWKbViExYSOA0-AHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Tablet",
    price: "₹20,000",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.tK_7CbqLazRpAydt8CISngHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Speaker",
    price: "₹10,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.TRBlCvBFceemsxsIz7YthAAAAA&pid=Api&P=0&h=180",
  },
  {
    name: "Monitor",
    price: "₹15,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.wqNcJRp9rIs6-eHreAY8agHaGH&pid=Api&P=0&h=180",
  },
  {
    name: "Keyboard",
    price: "₹2,000",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.PH9D46yM_oE3cdRjVv5p4gHaHa&pid=Api&P=0&h=180",
  },
];

const MenuItems = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openPaymentModal = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  const handlePayment = () => {
    alert(`Payment successful for ${selectedProduct.name}!`);
    closePaymentModal();
  };

  return (
    <div className="my-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Best of Electronics</h2>
        <button
          onClick={toggleView}
          className="text-xl p-2 focus:outline-none"
        >
          <FontAwesomeIcon icon={isGridView ? faBars : faTh} />
        </button>
      </div>

      {isGridView ? (
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div key={index} className="grid-item">
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md mx-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-base font-semibold mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 mb-2 text-center">
                  {product.price}
                </p>
                <button
                  onClick={() => openPaymentModal(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md flex flex-col items-center mx-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-base font-semibold mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-base text-gray-600 mb-2 text-center">
                {product.price}
              </p>
              <button
                onClick={() => openPaymentModal(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Confirm Payment for {selectedProduct.name}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Price: {selectedProduct.price}
            </p>
            <div className="flex justify-end">
              <button
                onClick={handlePayment}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-all duration-300"
              >
                Pay Now
              </button>
              <button
                onClick={closePaymentModal}
                className="ml-4 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
