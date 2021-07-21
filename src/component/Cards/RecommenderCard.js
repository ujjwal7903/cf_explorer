import React, { useState } from 'react'
import {Button,Modal} from 'react-bootstrap';




const Card = (props) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   // console.log(props.content);

    const Qlink = `https://codeforces.com/problemset/problem/${props.content.contestId}/${props.content.index}`;

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
                <div className="justify-content-center" style={{display:'flex',textAlign:'center',marginLeft:'auto'}}>
                  <h2 style={{paddingLeft:'10px'}} > {props.content.index + "."} </h2>
                  <h2 style={{paddingLeft:'10px'}} > <span style={{color:'crimson'}} >{props.content.name}</span></h2>
                </div>
                <div className="justify-content-center" style={{display:'flex',textAlign:'center',marginLeft:'auto'}}>
                <a href={Qlink} target="_blank" ><button 
                    className="btn btn-info"
                    style={{marginTop:'30px',width:'200px',height:'45px',fontSize:'20px'}}
                >
                Accept Challenge
                </button></a></div>
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

