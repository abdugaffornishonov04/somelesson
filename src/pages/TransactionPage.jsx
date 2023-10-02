import { Fragment } from 'react';
import TransactionCard from '../components/cards/TransactionCard';
// import { Button, Form, Modal } from 'react-bootstrap';

const TransactionPage = ({transactions, handleClose, handleSubmit, handleShow, show, validated, handleTransaction, transactionData}) => {
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
          // onClick={handleShow}
        >
          Add debtors
        </button>
      </div>
      <div className="transactions-wrapper">
        {transactions.map((transactions) => (
          <TransactionCard key={transactions.id} {...transactions} />
        ))}
        <div className="debts-page"></div>
      </div>
      {/* <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Debtor data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group md="4" controlId="firstName">
              <Form.Label>Debtor name</Form.Label>
              <Form.Control
                required
                onChange={handleTransaction}
                value={transactionData.name}
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                required
                onChange={handleTransaction}
                value={transactionData.quantity}
                type="tel"
                placeholder="Phone number"
              />
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                required
                onChange={handleTransaction}
            value={transactionData.date}
                type="number"
                placeholder="Amount"
              />
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="deadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                required
                onChange={handleTransaction}
                value={transactionData.price}
                type="date"
                placeholder="Phone number"
              />
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                onChange={handleTransaction}
                value={transactionData.description}
                type="text"
                as="textarea"
                placeholder="Description"
              />
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
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
      </Modal> */}
    </Fragment>
  );
}

export default TransactionPage