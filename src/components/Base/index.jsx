import React from 'react';
import Footer from './include/Footer/Footer';
import Header from './include/Header/Header';

function Base({children}){
    return <>
      <Header>
        {children}
      </Header>
      <Footer />
    </>
}

export default Base;