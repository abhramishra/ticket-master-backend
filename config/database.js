const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
const configureDB = () => {
    let dbUrl 
    if (process.env.NODE_ENV == 'development') {
        dbUrl = 'mongodb://localhost:27017/ticket-master'
    } else {
        dbUrl = "mongodb+srv://admin:admin@cluster0-tzrg0.mongodb.net/test?retryWrites=true&w=majority"
    }
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch(() => {
            console.log('faileds')
        })
}
                          
module.exports = configureDB