const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: String,
  pizza: Object,
  status: { type: String, default: 'Order Received' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);
