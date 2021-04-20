import React from 'react';
import Modal from "./modal";
import useModal from './useModal';

function Openmodal() {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App_t">
      <button className="button-default_cn" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
 
}
export default Openmodal;