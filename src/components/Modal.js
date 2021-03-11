import React from 'react'
import './css/Modal.css'


export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
            { showModal ? (
                <div className="modal">
                    <div className="modal-wrapper">
                        <img className="modal-img" src="../../img/manila-cathedral.jpg" />
                        <div>Modal</div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
