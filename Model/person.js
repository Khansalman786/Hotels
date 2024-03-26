const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ["Manager", "Waiter", "Chef"],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    }
})

// Create Person Model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;