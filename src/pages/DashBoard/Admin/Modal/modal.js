import React from 'react';
import { ToggleButton } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../admin.css'



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div className="modal-header1">
                <p>Create new users</p>
                </div>
            <div className="modal-content1">
                <div className="modal-form1">
                    <label htmlFor="ID">ID:</label>
                    <input type="number" name="ID" id="ID"></input>
                </div>
                <div className="modal-form1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div className="modal-form1">
                    <label htmlFor="falcuty">Falcuty:</label>
                    <input type="text" name="falcuty" id="falcuty"></input>
                </div>
                <div className="modal-form1">
                    <label htmlFor="role">Role:</label>
                    <input type="text" name="role" id="role"></input>
                </div>
                <div className="modal-footer1">
                    <button classname="btn-create">Create</button>
                </div>
            </div> */}
             <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>,document.body
) : null;

export default Modal;