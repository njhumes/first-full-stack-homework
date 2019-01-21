const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/guitars';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`${connectionString} is on`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`${connectionString} is disconnected`)
})

// mongoose.connection.on('error', () => {
//     console.log(`${err} has an error`)
// })