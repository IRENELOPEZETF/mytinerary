const express = require('express');
const userRouter = express.Router();
const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

userRouter.get('/all', (req, res)=> {
   userModel.find()
       .then(files => {
           res.send(files)
       })
       .catch(err => console.log(err));
});

userRouter.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // const picture = req.body.picture;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please, enter all fields' });    
    }

    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'This user already exists' });

            const newUser = new User({
                name,
                email,
                password,
                // picture
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id }, 
                                config.get('jwtSecret'),
                                { expiresIn: 3600 }, 
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                            // picture: user.picture
                                        },
                                        // msg: "Your registration has been succesfull"
                                    });
                                }
                            )
                        });
                })
            });
        })   
    })  

module.exports = userRouter;