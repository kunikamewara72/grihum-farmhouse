const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, preferredDates, guestsCount, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'Name, email, phone, and message are required.' });
    }
    const inquiry = await Inquiry.create({
      name, email, phone, preferredDates, guestsCount, message
    });
    res.status(201).json({ message: 'Inquiry sent successfully to Kumawat Rythem at Grihum Farms!', inquiry });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createInquiry };
