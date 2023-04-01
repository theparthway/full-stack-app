const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    dateBought: { type: Date, default: Date.now },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;