import React from 'react'

import "./Card.css"

const DebtsCard = ({id,name,amount,deadline,description,phone}) => {
  return (
    <div className="debt-card alert alert-warning">
      <div className="debt-card-left">
        <div className="debt-card-left-top">
          <span>
            <p className='dc-deadline badge bg-danger me-1'>{deadline}</p>
            <p className='dc-phone badge bg-warning'>+998_{phone}</p>
          </span>
          <h3 className='dc-name'>{name}</h3>
          <p className='dc-amount badge bg-info'>{amount} $</p>
        </div>
        <div className="debt-card-left-bottom">
          <p>{description}</p>
        </div>
      </div>
      <div className="debt-card-end">
        <button className='btn btn-primary dc-edit'>edit</button>
        <button className='btn btn-danger dc-delete'>delete</button>
      </div>
    </div>
  );
}

export default DebtsCard