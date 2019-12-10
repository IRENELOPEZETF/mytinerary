const express = require('express');
const authRouter = express.Router();
const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth.js');

authRouter.get('/all', (req, res) => {
    userModel.find()
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});

// find the user
authRouter.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
// validation, si no hay mail i/o no hay password...
    if (!email) {
        return res.status(400).json({
            msg: 'Please, enter an e-mail'
        });
    }
    if (!password) {
        return res.status(400).json({
            msg: 'Please, enter your password'
        });
    }
    // check if user exsits
    User.findOne({
            email
        })
        .then(user => {
            if (!user) return res.status(400).json({
                msg: 'This user does not exist'
            });
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg:'Invalid credentials'});

                    jwt.sign({
                            id: user.id
                        },
                        config.get('jwtSecret'), {
                            expiresIn: 3600
                        },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                // msg: "Your are log in",
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    // picture: user.picture
                                }
                            });
                        }
                    )
                })
        })
})
  
// @route GET api/auth/user
authRouter.get('/login', auth, (req, res) => {
    userModel.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = authRouter;