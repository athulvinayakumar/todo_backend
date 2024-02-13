const task = require('../Model/tSchema')
// import
exports.additem = async (req, res) => {
    console.log('inside the controller');
    console.log(req.body);
    try {

        const { title, description } = req.body

        const existingUser = await task.findOne({ title })

        if (existingUser) {
            res.status(406).json("User Already Exists...... Please Login!!!")
        }
        else {

            const newUser = new task({
            title,description
            })
            // add to mongodb - use save method in mongoose
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (err) {
        res.status(401).json(`Register failed due to ${err}`)
    }
}

exports.getallTask=async(req,res)=>{
  
    try{
        const alluser=await task.find()
        res.status(200).json(alluser)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
    
    }

    exports.delete = async (req, res) => {
        //get id
        const { id } = req.params
    
        try {
            const removeCategory = await task.findByIdAndDelete({ _id: id })
            res.status(200).json(removeCategory)
    
        } catch (err) {
    
            res.status(401).json(err)
        }
    }
    