const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    date_of_birth: {
        type: String, // Could be type: Date, but I didn't want to complicate things
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: false,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;