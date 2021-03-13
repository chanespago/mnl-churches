import React,{useRef, useEffect, useCallback} from 'react'
import {useSpring, animated} from 'react-spring'
import '../assets/css/Modal.css'


export const Modal = (props) => {
    const modalRef = useRef()

    const animation = useSpring({
        config:{
            duration: 250
        },
        opacity: props.showModal ? 1 : 0,
        transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`    
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            props.setShowModal(false);
        }
    }

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && props.showModal){
            props.setShowModal(false);
        }
    },[props.setShowModal, props.showModal])

    useEffect(()=> {
        document.addEventListener('keydown',keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    })
    return (
        <>
            { props.showModal ? (
                <div className="modal" ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <div className="modal-wrapper">
                        <img className="modal-img" src={props.setImg} alt=""/>
                        <div className="modal-txtholder">{props.setID}</div>
                        <div className="modal-credit">*This photo is from google.com*</div>
                        <div className="modal-close" onClick={() => props.setShowModal(prev=>!prev)}>x</div>
                    </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
}
