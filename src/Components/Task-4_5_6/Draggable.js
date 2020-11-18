import React, { useState } from 'react';
import './Draggable.css'
import { useDraggable } from 'use-draggable/dist/Draggable';
import tShirt from '../../images/t-shirt.png';
import Navbar from '../Task-1/Navbar/Navbar'; 
import { Button, Modal } from 'react-bootstrap';

const style = {
   
    backgroundColor: '#EEF5F3',
    minHeight: '100vh'

}

const ImageDraggable = () => {
    const { targetRef, handleRef } = useDraggable({ controlStyle: true });
    const [text, setText]= useState({
        text: '',
    })
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 const handleBlur = (e) =>{

    text[e.target.name] = e.target.value;
    console.log(text)
   
 }

  
    return (
        <div style={style} >
        <div className='container' > 
            <Navbar></Navbar>
            <div className="text-center">
            <Button variant="primary" onClick={handleShow}>
             Input Button
           </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
            <input className="form-control" onBlur={handleBlur} type="text" name="text" placeholder="Enter you text"/>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

            </div>
            <div className="t-shirt text-center">
                <img src={tShirt} alt=""/>
            </div>
           <div className=" d-flex justify-content-center" ref={targetRef}>
                <h1 className='target d-flex justify-content-center' ref={handleRef}>{text.text}</h1>
            </div>
           
        </div>
        </div>
    );
};

export default ImageDraggable;