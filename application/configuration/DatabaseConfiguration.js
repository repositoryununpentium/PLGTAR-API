const mongoose = require("mongoose");

const URL_CONNECTION = "mongodb+srv://ununpentium:Kintino8@plgtar.vonvf.mongodb.net/PLGTAR?retryWrites=true&w=majority";

mongoose.connect(URL_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;