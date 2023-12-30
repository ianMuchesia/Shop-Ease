import React from 'react'

const Checkout = () => {
  return (
    <div id="app">
    <div className="header">
      <nav className="indigo darken-4">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">eCommerce Checkout Demo<i className="material-icons">shopping_cart</i></a>
        </div>
      </nav>
      <div className="progress-container hide-on-med-and-up">
        <div className="progress-bar js-progress-bar"></div>
      </div>
    </div>
  
    <div className="container wrapper">
      <div className="row hide-on-med-and-up">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <p><b>Items in cart:</b> 0</p>
              <p><b>Shipping:</b> Standard - $0</p>
              <p><b>Total:</b> $0</p>
              <span className="small-text grey-text text-darken-2 m-top-10">Fill out the information below and go directly to payment by clicking the button.</span>
            </div>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">arrow_downward</i></a>
          </div>
        </div>
      </div>
  
      <div className="row">
        {/* <!-- Step 1: Information --> */}
        <div className="col s12 m6">
          <div className="card" id="step-1">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4"><b>Information</b></span>
              <div className="row m-top-15">
                <form className="col s12">
                  {/* <!-- Input fields and form elements --> */}
                </form>
              </div>
            </div>
          </div>
  
          {/* <!-- Step 2: Shipping and Voucher --> */}
          <div className="card" id="step-2">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4"><b>Shipping</b></span>
              <form action="#">
                {/* <!-- Shipping options --> */}
              </form>
  
              <span className="card-title grey-text text-darken-4 m-top-15 p-top-10"><b>Voucher</b></span>
              <label className="d-block m-top-15">
                <input type="checkbox" className="filled-in" />
                <span>I have a voucher code</span>
              </label>
  
              <div className="row m-top-10 p-top-10">
                <div className="input-field col s12 l6">
                  <input id="voucher" type="text" className="validate"/>
                  <label htmlFor="voucher">Voucher</label>
                </div>
                <div className="col s12 l6">
                  <a className="waves-effect waves-light btn indigo darken-4 m-top-10">Add voucher</a>
                </div>
              </div>
            </div>
          </div>
  
          {/* <!-- Step 3: Products --> */}
          <div className="card" id="step-3">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4"><b>Maybe you could also be interested in...</b></span>
              <div className="row m-top-15">
                {/* <!-- Product cards --> */}
              </div>
            </div>
          </div>
        </div>
  
        {/* <!-- Step 4: Order Summary and Payment --> */}
        <div className="col s12 m6">
          <div className="card" id="step-4">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4"><b>Order summary</b></span>
              <div className="row info">
                {/* <!-- Billing and delivery address --> */}
              </div>
  
              <span className="card-title grey-text text-darken-4 m-top-15"><b>Your order</b></span>
              <span><b>0 items</b></span>
              <ul className="collection">
                {/* <!-- Product items --> */}
              </ul>
  
              <ul>
                <li>
                  <span><b>Shipping</b> <i>Standard</i></span>
                  <span className="right">$0</span>
                </li>
                <li>
                  <span><b>TAX</b></span>
                  <span className="right">$0</span>
                </li>
              </ul>
            </div>
  
            <div className="card-action">
              <span><b>Total</b></span>
              <span className="right"><b>$0</b></span>
            </div>
  
            <div className="card-action">
              <span className="card-title grey-text text-darken-4"><b>Payment</b></span>
              <p className="payment-info">Please choose your desired payment method. Credit card option will redirect you to the payment gateway.</p>
              <p>
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Please sign me up for the newsletter</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>I hereby confirm that the information that I have provided is correct and that I accept the <a href="#" className="indigo-text text-darken-4">Terms and Conditions</a></span>
                </label>
              </p>
  
              <a href="#" className="mobilepay">
                <img src="https://cdn.mobilepay.dk/res-website/img/buttons/paywith/dk/mpblue/medium.svg" alt="" className="src"/>
              </a>
  
              <a href="#" className="waves-effect waves-light btn-credit-card blue-grey">
                <i className="material-icons left">credit_card</i>Pay with Credit Card
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Checkout