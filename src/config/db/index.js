const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/my-mongodb');
        console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.error('Cannot connect to MongoDB ', error);
    }
}

module.exports = { connect };
