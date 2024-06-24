import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import MenuItems from './components/MenuItems';
import MenuItems2 from './components/MenuItems2';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <ImageCarousel/>
      <MenuItems/>
      <MenuItems2/>
      <Footer/>
      {/* Other components go here */}
    </div>
  );
};

export default App;
