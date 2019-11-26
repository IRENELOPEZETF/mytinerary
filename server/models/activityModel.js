const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    cityId: {
        type: String,
        required: true,
    },
    itineraryId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
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
    description: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('activity', activitySchema);