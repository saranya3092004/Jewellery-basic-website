const mongoose = require('mongoose');
const Booking = require('../models/bookModels'); 
const Places = require('../models/placesModels'); 



exports.bookNow = async (req, res) => {
    try {
        const { name, email, place_id, mobile_number } = req.body;

        // Ensure all required fields are provided
        if (!name || !email || !place_id || !mobile_number) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the place by ID to ensure it exists
        const place = await Places.findById(place_id);
        if (!place) {
            return res.status(404).json({ message: "Place not found" });
        }

        // Check if the place is already booked by the user
        const existingBooking = await Booking.findOne({ email, place_id });
        if (existingBooking) {
            return res.status(400).json({ message: "Place has already been booked with this email" });
        }

        // Create a new booking entry
        const booking = new Booking({
            name,
            email,
            place_id,
            mobile_number
        });

        await booking.save();
        res.status(200).json({ message: "Booking successful", booking });
    } catch (error) {
        res.status(500).json({ message: "Error booking place", error });
    }
};


exports.deleteBooking = async (req, res) => {
    try {
        const { booking_id } = req.body;

        // Validate that booking_id is provided
        if (!booking_id) {
            return res.status(400).json({ message: "Booking ID is required" });
        }

        // Find the booking by ID
        const booking = await Booking.findById(booking_id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Delete the booking entry
        await Booking.findByIdAndDelete(booking_id);

        res.status(200).json({ message: "Booking successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting booking", error });
    }
};