// import mongoose
const mongoose = require('mongoose')

// create scheme
const tSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true,
    },

    description:{
        type:String,
        require:true
    }
})


// create model
const tasks = mongoose.model("tasks",tSchema)

// export
module.exports = tasks
