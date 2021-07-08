import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import UpsolveTable from './UpsolveTable';


// Modal not working
// take the help of Mo-Cart app

const Card = (props) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="dash-card"  onClick={handleShow}>
            <h2 style={{ color: 'white' , textAlign: 'center', padding: '10px' }}>{props.name}</h2>
        </div>

        
        <Modal size="lg" aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Never Give Up! <span style={{color:'crimson'}} >{props.name}</span>  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <UpsolveTable content={props.content} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
        </>
    );

}

export default Card;

