import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import JobAppFormik from './Form'


function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create your Free GUVI Account to Register or Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>Already have an account? -<a href='login'>Login</a></p>
            <JobAppFormik/> 
            <a href='Forgot Password'>Forgot Password?</a>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button  className='pop_btn' variant="btn btn-success" >
            Create a Free Account
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example