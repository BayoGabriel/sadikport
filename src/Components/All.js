import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import toolhire from "../Assets/Images/toolhire.jpg"
import ecom from "../Assets/Images/ecom.jpg"
import ecom2 from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg"

const All = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const showModal2 = () => {
        setIsOpen2(true);
    };

    const hideModal2 = () => {
        setIsOpen2(false);
    };
    const [isOpen22, setIsOpen22] = useState(false);

    const showModal22 = () => {
        setIsOpen22(true);
    };

    const hideModal22 = () => {
        setIsOpen22(false);
    };

  return (
    <>
        <div className='container-fluid pt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://www.desynexia.com'><img src={ecom2} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 3</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>CribInn — property marketplace</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal22}>DETAILS</button>
                                <a target="_blank" href='https://www.desynexia.com'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen22} onHide={hideModal22}>
                            <Modal.Header>
                                <Modal.Title>CribInn — property marketplace</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal22}></button>
                            </Modal.Header>
                            <Modal.Body>
                                Led end-to-end product strategy and UX for a property marketplace connecting landlords, tenants, and property seekers across Nigeria, scaling the platform to 40,000+ listings. Designed end-to-end web and mobile experiences across property search, bookings, landlord operations, tenant management, messaging, and payments, while building and scaling the company's design system.
                                <br/>
                                Thank you for taking the time to explore this work. Feel free to reach out to me if you have any questions or would like to know more about the design process.
                                <br></br>
                                Best regards,
                                <br/>
                                <span style={{fontWeight:"700"}}>ABDULAZEEZ</span>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal22} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://www.desynexia.com'><img src={ecom} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 2</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>BoldSwitch — fintech product suite</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal2}>DETAILS</button>
                                <a target="_blank" href='https://www.desynexia.com'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen2} onHide={hideModal2}>
                            <Modal.Header>
                                <Modal.Title>BoldSwitch — fintech product suite</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal2}></button>
                            </Modal.Header>
                            <Modal.Body>
                                Partnered directly with the CEO to design digital financial products serving 100,000+ users across consumer banking, business banking, payments, and international remittance.
                                <br></br>
                                <span style={{fontWeight:"700"}}>Project Details:</span>
                                <br/>
                                - Product Type: Fintech Platform
                                <br/>
                                - Scope: Consumer banking, business banking, remittance
                                <br/>
                                - Role: Senior Product Designer
                                <br></br>
                                <span style={{fontWeight:"700"}}>Key Features Designed:</span>
                                <br/>
                                - Scan & Pay and QR payment experiences
                                <br/>
                                - Virtual cards, bill payments, and transfers
                                <br/>
                                - Bravoo — UK remittance to Nigeria with credit building
                                <br/>
                                - Reusable design systems across products
                                <br></br>

                                Working closely with executive leadership and engineering teams, I defined product requirements and delivered customer-focused solutions, standardizing user experiences across multiple fintech products.
                                <br/>
                                Thank you for taking the time to explore this work. Feel free to reach out to me if you have any questions or would like to know more about the design process.
                                <br></br>
                                Best regards,
                                <br/>
                                <span style={{fontWeight:"700"}}>ABDULAZEEZ</span>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal2} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://www.desynexia.com'><img src={toolhire} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 1</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>THE LODA — mobility & logistics</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal}>DETAILS</button>
                                <a target="_blank" href='https://www.desynexia.com'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Header>
                                <Modal.Title>THE LODA — mobility & logistics</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal}></button>
                            </Modal.Header>
                            <Modal.Body>
                                Designed THE LODA, a multi-service platform for ride-hailing, truck-hailing, tricycle services, and logistics. Conducted discovery workshops, UX research, workflow analysis, and usability testing to improve operational efficiency, and built reusable design systems in close partnership with engineering throughout delivery.
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

export default All