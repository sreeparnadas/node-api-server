const models = require('../models')
const QuestionDifficultyLevel = models.QuestionDifficultyLevel // Use models' ClassName here

let self = {}

self.getAll = async (req, res) => {
    try{
        let data = await QuestionDifficultyLevel.findAll({})    
        return res.status(200).json({success: true,message: 'all reocrds','records': data})
    }
    catch(error){
        return res.status(500).json({success: false, message: error?.message})
    }
}

self.create = async (req, res) => {
    if (!req.body.level_name) {
        return res.status(400).send({success: false,message: "Content can not be empty"})
    }
    try{
        const newdata = {
            level_name: req.body.level_name
        }
        let data = await QuestionDifficultyLevel.create(newdata)
        return res.status(200).json({success:true, message: "Data saved", data: data})
        
    }
    catch(error){
        return res.status(500).json({success:false, message: error?.message})
    }
}

self.getById = async (req,res) => {
    try{
        let id = req.params.id
        let data = await QuestionDifficultyLevel.findByPk(id, {
        attributes: {
            exclude: ['createdAt','updatedAt']
        }
        })
        if(data){
            res.status(200).json({success: true,records: data})
        }
        else{
            res.status(200).json({success: false,records: data,message: "No such data present"})
        }
    }
    catch(error){
        return res.status(500).json({success: false, message: error?.message})
    }
}

self.update = async (req,res) => {
    try{
        id = req.params.id
        body = req.body
        let data = await QuestionDifficultyLevel.update(body, {
            where: {id: id}
        })
        if(data[0]==0){
            res.status(200).json({success:false,message: "No data found with this id"})
        }
        res.status(200).json({success:true,message: "Data updated successfully"})
    }
    catch(error){
        res.status(500).json({success:false,message: error?.message})
    }
}

self.delete = async (req,res) => {
    try{
        let id = req.params.id
        let data = await QuestionDifficultyLevel.destroy({
            where: {
                id: id
            }
        })
        if(data == 1){
            res.status(200).json({success:true,message:"Record deleted successfully"})
        }
        else{
            res.status(200).json({success:false,message:"No data found with this id"})
        }
    }
    catch(error){
        res.status(500).json({success:false,message:error?.message})
    }
}

module.exports = self