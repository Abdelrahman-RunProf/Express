const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;