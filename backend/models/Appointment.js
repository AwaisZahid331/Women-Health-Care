const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    purpose: { type: String, required: true },
    mobile: { type: String, required: true },
    date: { type: Date, required: true }, // Store the appointment date
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
