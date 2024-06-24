import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    name: "Perfume",
    price: "₹50,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.5AwgN5f06znKHEJ_S6ZC0wHaFm&pid=Api&P=0&h=180",
  },
  {
    name: "Doll",
    price: "₹30,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.pNUybmy_axbOQ49vSCNKjgAAAA&pid=Api&P=0&h=180",
  },
  {
    name: "Cycle",
    price: "₹3,000",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.uqgMMrDguDQjZktvjWxzcAHaGB&pid=Api&P=0&h=180",
  },
  {
    name: "Skin care",
    price: "₹5,000",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Um76Mdm1-Erav47vCezEEAHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "Pizza",
    price: "₹25,000",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.fxdrID-cyGo1ADqJJIWFTgHaGn&pid=Api&P=0&h=180",
  },
  {
    name: "toys",
    price: "₹20,000",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.lTQBDJSK46yTEj8nsPG6vQHaEe&pid=Api&P=0&h=180",
  },
];

const MenuItems2 = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 4, // Scroll 4 items at a time
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
    // Simulate payment processing
    alert(`Payment successful for ${selectedProduct.name}!`);
    closePaymentModal();
  };

  return (
    <div className="my-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Beauty, Food, Toys & more</h2>
        <button onClick={toggleView} className="text-xl p-2">
          <FontAwesomeIcon icon={isGridView ? faBars : faTh} />
        </button>
      </div>
      {isGridView ? (
        <Slider {...settings}>
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

export default MenuItems2;
