const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    soldBy: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    dateBought: { type: Date, default: Date.now },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;