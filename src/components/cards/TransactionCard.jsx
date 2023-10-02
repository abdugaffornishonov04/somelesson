import React from 'react'

const TransactionCard = ({name,quantity,date, price,description}) => {
  return (
    <div className="transaction-card alert alert-warning">
      <div className="name-amount-tr d-flex justify-content-between">
        <h4>{name}</h4>
        <p className="badge bg-primary">{quantity}ta</p>
      </div>
      <div className="date-price-tr d-flex justify-content-between">
        <p>{date}</p>
        <p className='badge text-danger'>{price}$</p>
      <p className="text-center">{description}</p>
      </div>
      <div className="btn-tr-wrapper d-flex justify-content-between">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default TransactionCard