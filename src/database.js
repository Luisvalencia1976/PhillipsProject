const mongoose = require('mongoose');

const { PHILLIPS_APP_MONGODB_HOST, PHILLIPS_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${PHILLIPS_APP_MONGODB_HOST}/${PHILLIPS_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)
    .then((db) => console.log("Conexión establecida"))
    .catch((err) => console.log(err));


module.exports = mongoose;