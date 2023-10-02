import { Fragment } from "react";
import DebtsCard from "../components/cards/DebtsCard";
import { Button, Form, Modal } from "react-bootstrap";

const DebtsPage = ({ debts, handleClose, handleShow, show, handleSubmit, validated, setValidated, debt, handleDebt}) => {
  return (
    <Fragment>
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for debtors..."
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleShow}
        >
          Add debtors
        </button>
      </div>
      <div className="debts-wrapper">
        {debts.map((debt) => (
          <DebtsCard key={debt.id} {...debt} />
        ))}
        <div className="debts-page"></div>
      </div>
      <Modal show={show} onHide={handleClose}>
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Debtor data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group md="4" controlId="firstName">
   
          <Form.Label>Debtor name</Form.Label>
          <Form.Control
            required
            onChange={handleDebt}
            value={debt.name}
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            required
            onChange={handleDebt}
            value={debt.name}
            type="tel"
            placeholder="Phone number"
          />
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            onChange={handleDebt}
            value={debt.phone}
            type="number"
            placeholder="Amount"
          />
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            required
            onChange={handleDebt}
            value={debt.deadline}
            type="date"
            placeholder="Phone number"
          />
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            onChange={handleDebt}
            value={debt.description}
            type="text"
            as="textarea"
            placeholder="Description"
          />
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Add debtors
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default DebtsPage;
