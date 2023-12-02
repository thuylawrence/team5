const {mongoose} = require("mongoose");

const hobbiesSchema = new mongoose.Schema({
    hobby: {
        type: String,
        required: true,
    },
});

const Hobbies = mongoose.model("User", hobbiesSchema);

module.exports = Hobbies;