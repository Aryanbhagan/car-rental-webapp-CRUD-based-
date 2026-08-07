const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  carType: { type: String, required: true },
  carModel: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
