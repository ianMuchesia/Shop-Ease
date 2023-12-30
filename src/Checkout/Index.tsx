// import React from 'react'

// const Checkout = () => {
//   return (
//     <div id="app" v-cloak>
//     <div className="header">
  
//     <nav className="indigo darken-4">
//       <div className="nav-wrapper container">
//         <a href="#" className="brand-logo">eCommerce Checkout Demo<i className="material-icons">shopping_cart</i></a>
//       </div>
//     </nav>
//         <div className="progress-container hide-on-med-and-up">
//         <div className="progress-bar js-progress-bar"></div>
//       </div>   
//     </div>
//     <div className="container wrapper">
//       <div className="row hide-on-med-and-up" v-cloak>
//         <div className="col s12 m6">
//           <div className="card">
//             <div className="card-content">
//               <p><b>Items in cart:</b>cartSummary.length</p>
//               <p><b>Shipping:</b>chosenShippingMethod.name - shippingPrice</p>
//               <p><b>Total:</b> $basketTotal</p>
//               <span className="small-text grey-text text-darken-2 m-top-10 ">Fill out the information below and go directly to payment by clicking the button.</span>
//             </div>
//             <a v-on:click="scrollToBottom(); $v.name.$touch(); $v.address.$touch(); $v.email.$touch(); $v.phone.$touch();" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">arrow_downward
//   </i></a>
//           </div>
  
//         </div>
//       </div>
//       <div className="row">
//         <div className="col s12 m6">
//           <div className="card" id="step-1">
//             <div className="card-content">
//               <span className="card-title activator grey-text text-darken-4"><b>Information</b></span>
//               <div className="row m-top-15">
//                 <form className="col s12">
//                   <div className="row">
//                     <div className="input-field col s12 l6 m-top-15">
//                       <input id="first_name" v-model="name" type="text" autoComplete="name"/>
//                       <label htmlFor="first_name">Full name</label>
//                       <span v-if="$v.name.$error" className="helper-text" data-error="Please fill out full name">Helper text</span>
  
//                     </div>
//                     <div className="input-field col s12 l6 m-top-15">
//                       <input id="company" v-on:blur="setCompanyShipping" v-model="company" type="text" className="validate"/>
//                       <label htmlFor="company">Company (optional)</label>
//                     </div>
//                   </div>
//                   <div className="row m-top-15">
//                     <div className="input-field col s12 autocomplete-container">
//                       <input className="js-autocomplete-input" id="dawa-autocomplete-input" v-model="addressInput" type="url" className="validate" autocomplete="false"/>
//                       <label htmlFor="dawa-autocomplete-input">Full address</label>
//                       <span v-if="$v.address.$error" className="helper-text" data-error="Please fill out full address">Helper text</span>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="input-field col s12 l6 m-top-15">
//                       <input  id="email" v-model="email" type="text" className="validate" autoComplete="email"/>
//                       <label htmlFor="email">Email</label>
//                       <span v-if="$v.email.$error" className="helper-text" data-error="Please fill out email">Helper text</span>
//                     </div>
//                     <div className="input-field col s12 l6 m-top-15">
//                       <input  id="phone" v-model="phone" type="text" className="validate" autoComplete="tel"/>
//                       <label htmlFor="phone">Phone
//                       </label>
//                       <span v-if="$v.phone.$error" className="helper-text" data-error="Please fill out phone">Helper text</span>
//                     </div>
//                   </div>
//                   <label className="d-block m-top-15">
//                     <input type="checkbox" v-model="showAlternative" className="filled-in" />
//                     <span>Choose alternative delivery</span>
//                   </label>
  
//                   <div v-if="showAlternative" className="m-top-15">
//                     <div className="row m-top-15" v-if="showAlternative">
//                       <div className="input-field col s12 l6">
//                         <input id="del_first_name" v-model="delName" type="text" className="validate"/>
//                         <label htmlFor="del_first_name">Full name</label>
//                       </div>
//                       <div className="input-field col s12 l6">
//                         <input id="del_company" v-model="delCompany" type="text" className="validate"/>
//                         <label htmlFor="del_company">Company (optional)</label>
//                       </div>
//                     </div>
//                     <div className="row m-top-15">
//                       <div className="input-field col s12 autocomplete-container">
//                         <input className="autocomplete" id="del_address" className="validate"  type="text" className="validate" autoComplete="shipping street-address"/>
//                         <label htmlFor="del_address">Full address</label>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="card" id="step-2" v-cloak>
//             <div className="card-content">
//               <span className="card-title activator grey-text text-darken-4"><b>Shipping</b></span>
//               <p>Pleasse choose your desired shipping provider.</p>
//               <form action="#">
//                 <p className="p-top-10" v-for="(shippingMethod, index) in shippingMethods">
//                   <label>
//                     <input v-model="shipping" name="group1" value="shippingMethod.id" type="radio" className="with-gap m-top-15" />
//                     <span>shippingMethod.desc - $shippingMethod.price</span>
//                   </label>
//                 </p>
//               </form>
//               <span className="card-title activator grey-text text-darken-4 m-top-15 p-top-10"><b>Voucher</b></span>
//               <label v-if="!showVoucher" className="d-block m-top-15">
//                     <input type="checkbox" v-model="showVoucher" className="filled-in" />
//                     <span>I have a voucher code</span>
//                   </label>
//               <div v-if="showVoucher" className="row m-top-10 p-top-10">
//                 <div className="input-field col s12 l6">
//                   <input id="voucher" type="text" className="validate"/>
//                   <label htmlFor="voucher">Voucher</label>
//                 </div>
//                 <div className="col s12 l6">
//                   <a className="waves-effect waves-light btn indigo darken-4 m-top-10">Add voucher</a>
//                 </div>
  
//               </div>
//             </div>
//           </div>
//           <div className="card" id="step-3" v-cloak>
//             <div className="card-content">
//               <span className="card-title activator grey-text text-darken-4"><b>Maybe you could also be interested in...</b></span>
//               <div className="row m-top-15">
             
               
//                     <div className="card">
//                       <div className="card-image">
//                         <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4505ad993e9162d9ccf05d2670a26916&auto=format&fit=crop&w=260&h=200&q=80"/>
//                         <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-4"><i className="material-icons">shopping_basket</i></a>
//                       </div>
//                       <div className="card-content">
//                         <span className="flow-text">Nike Sneakers</span>
//                         <div className="row">
//                           <div className="d-block input-field col m5">
//                             <select>
//                             <option value="" disabled>Size</option>
//                             <option v-if="index > 3" v-for="(n, index) in 14">US </option>
//                           </select>
//                           </div>
//                           <div className="d-block input-field col m7">
//                             <span className="related__product-price">$119</span>
//                             <span className="related__product-price related__product-price--before grey-text text-darken-1">$179</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
               
//                     <div className="card">
//                       <div className="card-image">
//                         <img src="https://images.unsplash.com/photo-1492633030546-6236e2bf198e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b00986edb7e47d2ff61ded3dd30f1b7&auto=format&fit=crop&w=260&h=200&q=80"/>
//                         <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-4"><i className="material-icons">shopping_basket</i></a>
//                       </div>
//                       <div className="card-content">
//                         <span className="flow-text">Nike t-shirt</span>
//                         <div className="row">
//                           <div className="d-block input-field col m5">
//                             <select>
//                             <option value="" disabled>Size</option>
//                             <option v-for="(size, index) in sizes" :value="size">{{size</option>
//                           </select>
//                           </div>
//                           <div className="d-block input-field col m7">
//                             <span className="related__product-price">$65</span>
//                             <span className="related__product-price related__product-price--before grey-text text-darken-1">$99</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
              
//                     <div className="card">
//                       <div className="card-image">
//                         <img src="https://images.unsplash.com/photo-1484071096222-7936a931e094?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4578f1107f7896f8f02bd701a6d3d52&auto=format&fit=crop&w=260&h=200&q=80">
//                         <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-4"><i className="material-icons">shopping_basket</i></a>
//                       </div>
//                       <div className="card-content">
//                         <span className="flow-text">Unsplash socks</span>
//                         <div className="row">
//                           <div className="d-block input-field col m5">
//                             <select>
//                             <option value="" disabled>Size</option>
//                             <option v-if="index > 3" v-for="(n, index) in 14" :value="n">US {{n</option>
//                           </select>
//                           </div>
//                           <div className="d-block input-field col m7">
//                             <span className="related__product-price">$5</span>
//                             <span className="related__product-price related__product-price--before grey-text text-darken-1">$15</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
               
//                     <div className="card">
//                       <div className="card-image">
//                         <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7d1df3fbecb8923c40cd429b2add590&auto=format&fit=crop&w=260&h=200&q=80">
//                         <a className="btn-floating halfway-fab waves-effect waves-light indigo darken-4"><i className="material-icons">shopping_basket</i></a>
//                       </div>
//                       <div className="card-content">
//                         <span className="flow-text">All Stars</span>
//                         <div className="row">
//                           <div className="d-block input-field col m5">
//                             <select>
//                             <option value="" disabled>Size</option>
//                             <option v-if="index > 3" v-for="(n, index) in 14" :value="n">US {{n</option>
//                           </select>
//                           </div>
//                           <div className="d-block input-field col m7">
//                             <span className="related__product-price">$60</span>
//                             <span className="related__product-price related__product-price--before grey-text text-darken-1">$80</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
               
//                   <div className="swiper-pagination" slot="pagination"></div>
//                   <div className="swiper-button-prev" slot="button-prev"></div>
//                   <div className="swiper-button-next" slot="button-next"></div>
//                 </swiper>
  
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col s12 m6">
//           <div className="card" id="step-4" v-cloak>
//             <div className="card-content">
//               <span className="card-title activator grey-text text-darken-4"><b>Order summary</b></span>
//               <div className="row info">
//                 <div className="col s12 m6">
//                   <p><b>Billing address:</b></p>
//                   <p>name </p>
//                   <p>company </p>
//                   <p>addressComputed </p>
//                   <p>cityComputed </p>
//                   <p>email </p>
//                   <p>phone </p>
//                 </div>
//                 <div className="col s12 m6" v-if="showAlternative">
//                   <p><b>Delivery address:</b></p>
//                   <p>delName </p>
//                   <p> delCompany </p>
//                   <p></p>
//                   <p></p>
//                 </div>
//               </div>
//               <span className="card-title activator grey-text text-darken-4 m-top-15"><b>Your order</b></span>
//               <span><b>items</b></span>
//               <ul className="collection">
//                 <li className="collection-item avatar" ref="item-1" v-for="(product, index) in products">
//                   {/* <img :src="product.image" alt="" className="circle"> */}
//                   <div className="row">
//                     <div className="col s12 l4">
//                       <span className="title"></span>
//                       <p></p>
//                     </div>
//                     <div className="input-field col s6 l2">
//                       <select>
//                           <option value="" disabled>Size</option>
//                           <option ></option>
//                         </select>
//                     </div>
//                     <div className="input-field col s6 l2">
                    
//                     </div>
//                   </div>
//                   <a href="#!" className="secondary-content"><i className="material-icons" v-on:click="deleteItem(product.id)">clear</i></a>
//                 </li>
//               </ul>
//               <ul>
//                 <li v-if="shipping">
//                   <span><b>Shipping</b> <i></i></span>
//                   <span className="right">$</span>
//                 </li>
//                 <li v-if="taxTotal">
//                   <span><b>TAX</b></span>
//                   <span className="right">$</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="card-action" v-if="basketTotal">
//               <span><b>Total</b></span>
//               <span className="right"><b>$</b></span>
//             </div>
//             <div className="card-action">
//               <span className="card-title activator grey-text text-darken-4"><b>Payment</b></span>
//               <p className="payment-info">Please choose your desired payment method. Credit card option will redirect you to the payment gateway.</p>
//               <p>
//                 <label>
//                     <input type="checkbox"  className="filled-in" />
//                     <span>Please sign me up for the newsletter</span>
//                 </label></p>
//               <p>
//                 <label>
//                     <input type="checkbox" v-model="consent" className="filled-in" />
//                     <span>I hereby confirm that the information that I have provided is correct and that I accept the <a href="#" className="indigo-text text-darken-4">Terms and Conditions</a></span>
//                 </label></p>
              
//               <a ref="link" v-on:click="goToPayment($event); $v.$touch();" href="https://mobilepay.dk/da-dk/pages/betal.aspx?phone=004512345678&amount=199" className="mobilepay">
//                 <img src="https://cdn.mobilepay.dk/res-website/img/buttons/paywith/dk/mpblue/medium.svg" alt="" className="src">
//               </a>
//               <a ref="link" v-on:click="goToPayment($event); $v.$touch();" href="https://payment.quickpay.net/payments/a4d5e59b2695e3b5c2d8b19c8112835a5e0c3365e0782a4fb7b43091b5142af9" className="waves-effect waves-light btn-credit-card blue-grey"><i className="material-icons left">credit_card</i>Pay with Credit Card</a>
//             </div>
  
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Checkout