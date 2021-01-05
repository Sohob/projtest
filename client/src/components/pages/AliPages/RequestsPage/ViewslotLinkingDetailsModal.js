import React , {useState} from "react"
import ReplacementSlot from "./ReplacementRequests"
import SlotLinkingtRequest from "./SlotLinkingtRequests"
import ChangeDayOfftRequest from "./ChangeDayOffRequests"
import LeavesRequests from "./LeavesRequests"
import {OverlayTrigger,Tooltip, Container, Col, Row, DropdownButton, Dropdown,Modal, Button, Table} from 'react-bootstrap'

function ViewSlotLinkingDetails(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          View Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Request Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            <b>Request sent by:</b> {props.Sender}
            </p>
            <p>
            <b>Request sent to:</b> {props.Reciever}
            </p>
            <p>
            <b>RequestType:</b> {props.RequestType}
            </p>
            <p>
            <b>Status:</b> {props.Status}
            </p>
            <p>
            <b>Desired slot:</b>
            <br></br>
            StartTime: {props.DesiredSlot.StartTime}
            <br></br>
            EndTime: {props.DesiredSlot.EndTime}
            <br></br>
            Course Taught In Slot: {props.DesiredSlot.CourseTaughtInSlot}
            <br></br>
            SlotLocation: {props.DesiredSlot.SlotLocation}
            </p>
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

export default ViewSlotLinkingDetails;