const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watch = new Schema({
    name: String,
    type: String,
    price: String,
    img: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Model", watch, "watch");