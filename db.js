const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connections = mongoose.connect(process.env.mongoURL)

module.exports = {
     connections
}