const {mongoose} = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    favorite_color: {
        type: Date,
        required: true,
    },
    favorite_food: {
        type: String,
        required: true,
        unique: true,
    },
    favorite_movie: {
        type: String,
        required: true,
    },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;