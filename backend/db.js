const mongoose = require('mongoose');

const mongoURI ="mongodb://127.0.0.1:27017/" ;
//const mongoURI = " mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1" 
//const mongoURI = "mongodb://localhost:27017/" ;
const connectToMongo = () => {
        mongoose.connect(mongoURI ).then(()=>
            console.log("Conneced to Mongo Successfully"));
    }



module.exports = connectToMongo;