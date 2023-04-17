if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectToDb = require("./config/connectToDb");
const Ticket = require("./models/ticket");
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

// connect to database
connectToDb();

// routing

app.post('/register', usersController.register);
app.post('/login', usersController.login);
app.post('/logout', usersController.logout);

app.get('/check-auth', requireAuth, usersController.checkAuth);

app.get('/tickets', requireAuth, async (req, res) => {
    const tickets = await Ticket.find();

    res.json({ tickets });
});

app.get('/ticket/:id', requireAuth, async (req, res) => {
    const id = req.params.id;

    const ticket = await Ticket.findById(id);

    res.json({ ticket });
});

app.post('/ticket', requireAuth, async (req, res) => {
    const { firstName, lastName, gender, soldBy, payment, checkedIn } = req.body;

    const ticket = await Ticket.create({
        firstName,
        lastName,
        gender,
        soldBy,
        payment,
        checkedIn
    });

    res.json({ ticket });
});

app.put('/ticket/:id', requireAuth, async (req, res) => {
    const id = req.params.id;
    
    const { firstName, lastName, gender, soldBy, payment, checkedIn } = req.body;

    await Ticket.findByIdAndUpdate(id, {
        firstName,
        lastName,
        gender,
        soldBy,
        payment,
        checkedIn
    });

    const ticket = await Ticket.findById(id);

    res.json({ ticket });
});

app.delete('/ticket/:id', requireAuth, async (req, res) => {
    const id = req.params.id;

    const ticket = await Ticket.findByIdAndDelete(id);

    res.json({ ticket });
});

// start server

app.listen(process.env.PORT);