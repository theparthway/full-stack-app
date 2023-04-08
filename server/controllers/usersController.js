const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user");

async function register(req, res) {
    try {
        const { username, password } = req.body;
    
        // hashing
        const hashedPass = bcrypt.hashSync(password, 8);
    
        await User.create({ username, password: hashedPass });
    
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username });
        if (!user) return res.sendStatus(401);
    
    
        const isPasswordMatch = bcrypt.compareSync(password, user.password);
        if (!isPasswordMatch) return res.sendStatus(401);
    
    
        // jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    
        // cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'None',
            secure: process.env.NODE_ENV === 'production'
        })
    
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        console.log("login auth error");
        res.sendStatus(400);
    }
}

function logout(req, res) {
    try {
        res.clearCookie("Authorization", {path:'/'});
        res.sendStatus(200);
    } catch(err) {
        console.error(err);
        res.sendStatus(400);
    }
}

function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
}

module.exports = {
    register,
    login,
    logout,
    checkAuth
};