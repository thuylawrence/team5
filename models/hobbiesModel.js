const mongoose = require("mongoose");

const hobbiesSchema = new mongoose.Schema({
    hobby: {
        type: String,
        required: true,
    },
});

const Hobbies = mongoose.model("Hobbies", hobbiesSchema);

module.exports = Hobbies;