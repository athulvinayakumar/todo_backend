// 
//1) import express module
const express = require('express')

// // create an object for router class inside express module
const router = new express.Router()

// // import controller
const taskController = require('../Controller/taskController')

// // setup path to resolve request
router.post('/user/add',taskController.additem)

// get category
router.get('/user/task',taskController.getallTask)

// delete
router.delete('/user/remove/:id',taskController.delete)

// //4) export router
module.exports = router