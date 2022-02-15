import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51KSDDVBhcf6qrKng3Ocl9POiFIwEEdCTwwkq9vR5K7muwh0qgZ2NmXr0AXn6wAx0esX5DEFd2vKIP1YKVwdSj5vG00siMOhWWS"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
