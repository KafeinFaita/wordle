const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, function(){
            console.log("Listening on port " + process.env.PORT);
        });
    }).catch(err => console.log(err));