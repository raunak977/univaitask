const express = require('express')
const mongoose = require('mongoose')

//start express framework
const app = express()

mongoose.connect('mongodb://localhost/univaitask')

const con = mongoose.connection

//check if connected, if connected let the user know
con.on('open', () => {
    console.log('Connected!')   //print "connected"
})

app.use(express.json())

const studentRouter = require('./routes/students') //forward req to students.js
app.use('/students', studentRouter) //middleware

//listen to the server
app.listen(6000, function(){
    console.log('Server Started and Running!')
})