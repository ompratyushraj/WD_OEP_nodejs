const mongoose = require('mongoose');

const uri = "mongodb+srv://ompratyushraj:root@cluster01.njbt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}

connect();

require('./admin.model');
