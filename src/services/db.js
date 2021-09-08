const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://compasso:compasso@cluster0.linzs.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    function (err) {
        if (err) throw err;
        else {
            console.log('sucess connection with db');
        }
    });

module.exports = mongoose;



