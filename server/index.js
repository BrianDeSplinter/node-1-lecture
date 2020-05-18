const express = require('express')
//same as import express from 'express'

const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/brian', (req, res) =>{
    res.status(200).send('Brian')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`)) 
