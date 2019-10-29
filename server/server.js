const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const db = require('./config/keys_dev').mongoURI;
const cityRouter = require('./api/cities');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log (err));

app.use('/cities', cityRouter);
// const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server runing on ' + port + ' port'));

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 5000;
// const cors = require('cors');
// const cityRouter = require('./api/citiesRouters');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );
// app.use(cors());
// app.use('/cities', cityRouter);

// app.post('/api/world', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
//     res.send(
//         `I received your request. This is what you sent me: ${req.body.post}`,
//     );
// });

// app.post('/cities/prova', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
//     res.send(
//         'rebut prova cities: ${req.body.post}',
//     );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
