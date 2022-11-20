const mongoose = require('mongoose');

const uri = "mongodb+srv://User0:dAtAOIl4710@admin-crud.swybe.mongodb.net/?retryWrites=true&w=majority"

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
