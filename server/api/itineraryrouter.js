// import { Router } from 'express';
// const itineraryRouter = Router();
// import itineraryModel, { find } from '../models/itineraryModel';
const express = require('express');
const itineraryRouter = express.Router();
const itineraryModel = require('../models/itineraryModel');

itineraryRouter.get('/test', (req, res) => {
    res.send({
        msg: 'Itinerary test route.'
    });
});

itineraryRouter.get('/all',
    (req, res) => {
        itineraryModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
});

itineraryRouter.post('/add', (req, res) => {
    
    const cityId = req.body.cityId;
    const title = req.body.title;
    const profilepicture = req.body.profilepicture;
    const rating = req.body.rating;
    const duration = req.body.duration;
    const price = req.body.price;
    const hashtags = req.body.hashtags;
    const newItinerary = new itineraryModel({
        cityId,
        title,
        profilepicture,
        rating,
        duration,
        price,
        hashtags
    });
    newItinerary.save()
        .then(() => res.json('Itinerary added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

itineraryRouter.get('/:cityId',
    (req, res) => {
        console.log("holaaa");
        let cityRequested = req.params.cityId;
        itineraryModel.find({
                cityId: cityRequested
            })
            .then(itineraries => {
                res.send(itineraries)
            })
            .catch(err => console.log(err));
    });

module.exports = itineraryRouter;
