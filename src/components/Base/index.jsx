import React from 'react';
import Footer from './include/Footer/Footer';
import Header from './include/Header/Header';

function Base({ children }) {
  return <>
    <Header />
      <div className="container-fluid">
        {children}
      </div>
    <Footer />
  </>
}

export default Base;