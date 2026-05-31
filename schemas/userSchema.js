const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    telephone: Number,
    age: Number,
    country: String,
    gender: String

}, { timestamps: true });
module.exports = userSchema;