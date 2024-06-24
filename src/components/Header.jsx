import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faStore, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false); // State for cart modal
  const [sellerModalVisible, setSellerModalVisible] = useState(false); // State for seller modal

  const menuItems = [
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'Products', link: '#' },
    { id: 3, name: 'About Us', link: '#' },
    { id: 4, name: 'Contact Us', link: '#' },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter menu items based on search query
    const filteredItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredMenu(filteredItems);
  };

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const toggleCartModal = () => {
    setCartModalVisible(!cartModalVisible);
  };

  const navigateToCartPage = () => {
    // Implement navigation logic to the cart page
    console.log("Navigating to cart page...");
  };

  const toggleSellerModal = () => {
    setSellerModalVisible(!sellerModalVisible);
  };

  const navigateToSellerRegistration = () => {
    // Implement navigation logic to seller registration page
    console.log("Navigating to seller registration page...");
  };

  return (
    <div className="bg-blue-600 text-white flex items-center justify-between p-4 relative">
      <div className="text-2xl font-bold text-center flex-shrink-0">Flipkart</div>
      <div className="relative mx-6 flex-grow max-w-2xl">
        <input
          type="text"
          className="w-full p-2 pl-12 rounded border-none outline-none text-black"
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m2.03-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>

      <div className="hidden md:flex items-center">
        <a href="#" className="flex items-center mx-4" onClick={openLoginModal}>
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </a>
        <a href="#" className="flex items-center mx-4" onClick={toggleCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Cart
        </a>
        <a href="#" className="flex items-center mx-4" onClick={toggleSellerModal}>
          <FontAwesomeIcon icon={faStore} className="mr-2" />
          Become a Seller
        </a>
        <div className="relative mx-4">
          <button className="focus:outline-none" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Notification Preferences</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">24*7 Customer Care</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Advertise</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Download App</a>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button className="text-xl p-2" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {mobileMenuVisible && (
          <div className="absolute top-full left-0 bg-white w-full mt-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10">
            {menuItems.map(item => (
              <a key={item.id} href={item.link} className="block px-4 py-2 hover:bg-gray-200 text-black">{item.name}</a>
            ))}
          </div>
        )}
      </div>

      {/* Conditional rendering of cart modal */}
      {cartModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={toggleCartModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-700 text-4xl"
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Cart</h2>
            {/* Replace with your cart content or logic */}
            <p className="text-center text-white">Cart content goes here...</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={navigateToCartPage}
                className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition-all"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <LoginModal isVisible={loginModalVisible} onClose={closeLoginModal} />
    </div>
  );
};

export default Header;
