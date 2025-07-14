const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/order', async (req, res) => {
  const { userId, pizza } = req.body;
  const order = new Order({ userId, pizza });
  await order.save();
  res.send({ message: 'Order placed successfully' });
});

module.exports = router;
