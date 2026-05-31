const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
});
module.exports = userSchema;