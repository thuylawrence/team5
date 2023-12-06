const mongoose = require("mongoose");

const skillsetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
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
