import React from 'react';
import Footer from './include/Footer/Footer';
import Header from './include/Header/Header';
import SearchBar from './include/Searchbar';

function Base({children}){
    return <>
      <Header/>
      <SearchBar/>
      <div className="container-fluid">
        {children}
        </div>
      <Footer />
    </>
}

export default Base;


