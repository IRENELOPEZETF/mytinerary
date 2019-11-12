const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    cityId: { 
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    profilepicture: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    hashtags: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('itinerary', itinerarySchema);
