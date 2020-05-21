
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected"))
    .catch(err => console.log("Bad Connection Try Again", err))