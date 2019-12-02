const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const config = require('config');
const db = config.get('mongoURI');
const cityRouter = require('./api/cityrouter');
const itineraryRouter = require('./api/itineraryrouter');
const activityRouter = require('./api/activityrouter');
const userRouter = require('./api/userrouter.js');
const auth = require('./api/auth.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log (err));

app.use('/cities', cityRouter);
app.use('/itineraries', itineraryRouter);
app.use('/activities', activityRouter);
app.use('/user', userRouter);
app.use('/auth', auth);
app.listen(port, () => console.log('Server runing on ' + port + ' port'));

