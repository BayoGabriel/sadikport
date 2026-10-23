import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import toolhire from "../Assets/Images/toolhire.jpg"

const All2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
  return (
    <>
        <div className='container-fluid pt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://www.desynexia.com'><img src={toolhire} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 1</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>Nigeria Police Crime & Investigation Platform</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal}>DETAILS</button>
                                <a target="_blank" href='https://www.desynexia.com'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Header>
                                <Modal.Title>Nigeria Police Crime & Investigation Platform</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal}></button>
                            </Modal.Header>
                            <Modal.Body>
                                Led UX strategy for the Nigeria Police Crime & Investigation Management Platform, partnering with stakeholders and engineering to digitize investigative workflows and improve operational transparency.

                                Modules delivered include Case Management, Investigation, Officer Assignment, Registry, Evidence Management, Live Interviews, Reporting & Analytics, and Document Tracking — each designed to simplify complex operational workflows for officers and administrators.

                                The platform modernizes how crime cases and investigations are managed, bringing structure, accountability, and efficiency to processes that were previously manual and fragmented.
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default All2