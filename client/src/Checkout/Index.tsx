import React from 'react';
import Orders from './Orders';
import Payment from './Payment';

const Checkout = () => {
  return (
    <>
      <div className='checkout-container'>
        <div className='checkout-window'>
        <Orders/>
          <Payment/>
        </div>
      </div>
    </>
  );
};

export default Checkout;
