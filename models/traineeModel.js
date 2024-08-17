const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

// const conn = require('../services/db');
// conn.dbConnection();

const traineeSchema = new Schema({
    "name": String,
    "age": Number,
    "active": Boolean
});

const traineeModel = mongoose.model("trainees", traineeSchema);

module.exports = traineeModel;