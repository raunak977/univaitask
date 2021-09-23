const mongoose = require('mongoose')

//schema creation
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    DSLPEnrollment: {
        type: Boolean,
        required: true,
        default: false
    }  
})

module.exports = mongoose.model('Student', studentSchema)