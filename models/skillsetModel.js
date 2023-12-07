const mongoose = require("mongoose");

const skillsetSchema = new mongoose.Schema({
    technical_skill: {
        type: String,
        required: true,
    },
    other_skill: {
        type: String,
        required: true,
    },
});

const Skillset = mongoose.model("skillset", skillsetSchema);

module.exports = Skillset;
