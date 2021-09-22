const mongoose = require('mongoose')

const {database} = require('../config')
//db connection
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

