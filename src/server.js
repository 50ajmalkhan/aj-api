const express = require('express');
const app = express();
const env = require('dotenv').config();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const BookRoutes = require("./routes/userBooked")
const serviceRoutes = require('./routes/service');
// const addToCartRoutes = require('./routes/cart');
const path = require('path');
const cors = require('cors');

mongoose.connect(
    process.env.MongoURL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
).then(() => {
    console.log('DataBase Connected')
});
app.use(cors())
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.get('/apiR', (req, res, next) => { { res.send("ajmal"); } });
app.use('/api', userRoutes);

app.use('/api', BookRoutes);
app.use('/api', serviceRoutes);
// app.use('/api', addToCartRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});