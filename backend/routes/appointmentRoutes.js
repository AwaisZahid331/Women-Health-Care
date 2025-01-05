const express = require('express');
const Appointment = require('../models/Appointment'); // Path to the Appointment model

const router = express.Router();

// POST route to handle form submission
router.post('/appointments', async (req, res) => {
    try {
        const { name, email, purpose, mobile, date } = req.body;

        // Validate the data
        if (!name || !email || !purpose || !mobile || !date) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new appointment
        const appointment = new Appointment({
            name,
            email,
            purpose,
            mobile,
            date,
        });

        // Save to database
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while booking the appointment.' });
    }
});

module.exports = router;
