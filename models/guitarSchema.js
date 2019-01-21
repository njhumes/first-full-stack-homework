const mongoose = require('mongoose');
const guitarSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
})

const Guitar = mongoose.model('Guitar', guitarSchema);
module.exports = Guitar;
