const express = require ('express');
const cityRouter = express.Router();
// const mongoose = require('mongoose');
// const citiesSchema = mongoose.Schema;

const cityModel = require('../models/cities.model');

// var citiesSchema = new mongoose.Schema({
//     name: String,
//     country: String,
// });
// var City = mongoose.model("City", citiesSchema);

cityRouter.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' });
});

// cityRouter.get('/prova', (req, res) => {
//     res.send({ msg: 'una prova més'})
// });

// cityRouter.post('/prova', (req, res) => {
//     res.send({
//         msg: 'i got it'
//     })
// });

cityRouter.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

cityRouter.route('/add').post((req, res) => {
    const name = req.body.name;
    const country = req.body.country;
    const newCity = new City({
        name,
        country
    });
    newCity.save()
        .then(() => res.json('City added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = cityRouter;