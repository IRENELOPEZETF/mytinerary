// import { Router } from 'express';
// const cityRouter = Router();
// import { find, findOne } from '../models/cityModel';
const express = require('express');
const cityRouter = express.Router();
const cityModel = require('../models/cityModel');

cityRouter.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' });
});

cityRouter.get('/all', (req, res) => {
        cityModel.find({})
            .then(cities => {
                res.send(cities)
            })
            .catch(err => console.log(err));
});

cityRouter.post('/add', (req, res) => {
    // console.log(req.body);
    const name = req.body.name;
    const country = req.body.country;
    const newCity = new cityModel({
        name,
        country
});
    
newCity.save()
        .then(() => res.json('City added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

cityRouter.get('/:name',
    (req, res) => {
        const cityRequested = req.params.name;
        cityModel.findOne({
                 name: cityRequested
            })
            .then(city => {
                res.send(city)
            })
            .catch(err => console.log(err));
            console.log("esto debería ser barna");
});

module.exports = cityRouter;