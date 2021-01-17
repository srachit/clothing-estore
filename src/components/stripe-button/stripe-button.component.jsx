import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51IAXItBwgCjZzI3tMKGI3SrkcS2NPCNngrTXVMEGiWfCzf6atBfldS9eTMcdL9cPKiCTCcVCimDJdcagqHFAlxbC00fRS9XuKH";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='eStore'
            billingAddress
            shippingAddress
            img='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
