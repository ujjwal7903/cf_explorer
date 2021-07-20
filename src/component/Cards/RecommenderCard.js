import React, { useState } from 'react'
import {Button,Modal} from 'react-bootstrap';



// Modal not working
// take the help of Mo-Cart app

const Card = (props) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props.content);

    return (
        <>
        <div className="small-dash-card"  onClick={handleShow}>
            <h2 style={{ color: 'white' , textAlign: 'center', padding: '10px' }}>{props.name}</h2>
        </div>

        
        <Modal size="lg" aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Accept the Challenge! <span style={{color:'crimson'}} >{props.name}</span>  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container">
                <div style={{display:'flex'}}>
                  <h2> {" "+props.content.index} </h2>
                  <h2> <span style={{color:'crimson'}} > {" "+props.content.name}</span></h2>
                </div>
                <button 
                    className="btn btn-dark"
                    style={{marginTop:'40px',width:'200px',height:'40px',fontSize:'20px'}}
                >
                Accept Challenge
                </button>
              </div>
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

