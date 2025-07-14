const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const Order = require('../models/Order');
const nodemailer = require('nodemailer');

router.get('/inventory', async (req, res) => {
  const stock = await Inventory.findOne();
  res.send(stock);
});

router.post('/inventory/update', async (req, res) => {
  await Inventory.updateOne({}, req.body, { upsert: true });
  res.send({ message: 'Inventory updated' });
});

router.post('/order/status', async (req, res) => {
  const { orderId, status } = req.body;
  await Order.findByIdAndUpdate(orderId, { status });
  res.send({ message: 'Order status updated' });
});

async function checkStock() {
  const stock = await Inventory.findOne();
  if (stock.base < 20) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your@gmail.com',
        pass: 'yourpassword'
      }
    });
    await transporter.sendMail({
      from: 'your@gmail.com',
      to: process.env.ADMIN_EMAIL,
      subject: 'Low Inventory Alert',
      text: 'Pizza base stock is below threshold!'
    });
  }
}
module.exports = router;
