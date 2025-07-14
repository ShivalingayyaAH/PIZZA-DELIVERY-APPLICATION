const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

// Create order
router.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;
  const options = {
    amount: amount * 100, // convert to smallest currency unit
    currency,
    receipt: `rcptid_${Date.now()}`
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// Verify payment
router.post('/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const hmac = crypto.createHmac('sha256', 'YOUR_KEY_SECRET');
  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = hmac.digest('hex');

  if (digest === razorpay_signature) {
    res.json({ status: 'success' });
  } else {
    res.status(400).json({ error: 'Invalid signature' });
  }
});

module.exports = router;
