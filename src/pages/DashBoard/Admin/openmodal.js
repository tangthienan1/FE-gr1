import React, { useState } from 'react';
import { Modal } from './modal';
import './admin.css'
function Openmodal() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div className="form-input">
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">Create</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}
export default Openmodal;