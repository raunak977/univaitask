const express = require('express')
const Student = require('../models/student')

//router from express
const router = express.Router()

//specify url with handlers (get, post, etc..)
router.get('/', async(req,res) => {
    try{
            const students = await Student.find()
            res.json(students)  //respond in json format

    }catch(err){
        res.send('Error' + err)
    }
})

//create post request
router.post('/', async(req,res) => {
    const student = new Student({
        name: req.body.name,
        course: req.body.course,
        DSLPEnrollment: req.body.DSLPEnrollment
    })

    try{
        const s1 = await student.save()
        res.json(s1)

    }catch(err){
        res.send('Error')
    }
})

//export the router module to make it accessible to app.js
module.exports = router