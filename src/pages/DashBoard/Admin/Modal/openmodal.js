import React, { useState } from 'react';
import '../admin.css'
import Modal from "./modal";
import useModal from './useModal';

function Openmodal() {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
 
}
export default Openmodal;