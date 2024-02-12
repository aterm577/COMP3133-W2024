const mongoose = require('mongoose')

// Created a schema for the Users collection
const UsersSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    email:{
        type: String,
        required: true,
        trim: true,
        validate(value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
              throw new Error('Invalid email format')
            }
        }
    },
    address:{
        street:{
            type: String,
            required: true
        },
        suite: String,
        city:{
            type: String,
            required: true,
            trim: true,
            validate(value) {
                const cityRegex = /^[A-Za-z\s]+$/
                if (!cityRegex.test(value)) {
                  throw new Error('Invalid city name!')
                }
            }
        },
        zipcode:{
            type: String,
            required: true,
            validate(value) {
                const zipcodeRegex = /^\d{5}-\d{4}$/ 
                if (!zipcodeRegex.test(value)) {
                  throw new Error('Invalid zip code format! It must be DDDDD-DDDD format')
                }
            }
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    phone:{
        type: String,
        required: true,
        validate(value) {
            const phoneRegex = /^\d{1}-\d{3}-\d{3}-\d{4}$/
            if (!phoneRegex.test(value)) {
              throw new Error('Invalid phone number format! It must be D-DDD-DDD-DDDD format')
            }
        }
    },
    website:{
        type: String,
        required: true,
        validate(value) {
            const urlRegex = /^(http|https):\/\/[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/
            if (!urlRegex.test(value)) {
                throw new Error('Invalid website URL format (http or https)')
            }
        }
    },
    company:{
        name: String,
        catchPhrase: String,
        bs: String
    } 

})

// Export a mongoose model for the 'users' collection based on the UsersSchema
module.exports = mongoose.model("Users", UsersSchema)