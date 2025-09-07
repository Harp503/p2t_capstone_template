import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
const fetchClientSecret = () => {
  return fetch('http://localhost:3500/api/payment', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret)
};
const CheckoutForm = () => {
    
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};
const Checkout = () => {
  return ( <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
 
  )
}

export default Checkout