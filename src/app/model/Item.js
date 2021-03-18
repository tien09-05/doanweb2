const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    name: String,
    type: String,
    price: BigInt64Array,
    img: String,
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Item', Item);