const express = require('express');
const activityRouter = express.Router();
const activityModel = require('../models/activityModel');

activityRouter.get('/test', (req, res) => {
    res.send({
        msg: 'Itinerary test route.'
    });
});

activityRouter.get('/all',
    (req, res) => {
        activityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

activityRouter.post('/add', (req, res) => {

    const itineraryId = req.body.itineraryId;
    const name = req.body.name;
    const place = req.body.place;
    const picture = req.body.picture;
    const duration = req.body.duration;
    const price = req.body.price;
    const description = req.body.description;
    const newActivity = new activityModel({
        itineraryId,
        name,
        place,
        picture,
        duration,
        price,
        description
    });
    newActivity.save()
        .then(() => res.json('Activity added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

activityRouter.get('/:itineraryId',
    (req, res) => {
        console.log("holaaa");
        let itineraryRequested = req.params.itineraryId;
        activityModel.find({
                itineraryId: itineraryRequested
            })
            .then(activities => {
                res.send(activities)
            })
            .catch(err => console.log(err));
    });

module.exports = activityRouter;
