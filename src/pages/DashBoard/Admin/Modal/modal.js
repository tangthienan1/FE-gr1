import React from 'react'
import '../admin.css'

export const Modal = ({ show, close }) => {
    return (
        <div classname="modal-wrapper"
            style={{
                opacity: show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p>Create new users</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-form">
                    <label htmlFor="ID">ID:</label>
                    <input type="ID" name="ID" id="ID"></input>
                </div>
                <div className="modal-form">
                    <label htmlFor="name">Name:</label>
                    <input type="name" name="name" id="name"></input>
                </div>
                <div className="modal-form">
                    <label htmlFor="falcuty">Falcuty:</label>
                    <input type="falcuty" name="falcuty" id="falcuty"></input>
                </div>
                <div className="modal-form">
                    <label htmlFor="role">Role:</label>
                    <input type="role" name="role" id="role"></input>
                </div>
                <div className="modal-footer">
                    <button onClick={close} classname="btn-create">Create</button>
                </div>
            </div>
        </div>
    )
}
