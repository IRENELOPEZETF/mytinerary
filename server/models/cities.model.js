const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('city', citySchema);