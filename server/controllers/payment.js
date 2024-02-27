import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51OmyAkFrMLefLTJ5GRSmUK0gdh5GLRelIYQtp7KqT59iWMShb5icYfzB2k283yshM8Jscltq2BF7HBJyAZEguTRD00nJZjTsBS');

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body; // Assuming the amount is passed in the request body
    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change the currency based on your requirements
      // Add more parameters as needed (e.g., description, metadata)
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ success: false, message: 'Failed to create payment intent.' });
  }
};
