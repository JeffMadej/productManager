const express = require('express'),
    app = express(),
    port = 8000;
const cors = require('cors');

require('./server/config/db.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/product.routes')(app);

app.listen(port, () => {console.log(`Listening on port ${port}`)});



