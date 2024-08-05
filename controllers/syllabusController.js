const models = require('../models')
const Syllabus = models.Syllabus
const Course = models.Course

let self = {}

self.getAll = async (req, res) => {
    try{
        let data = await Syllabus.findAll({
            include: [{
                model: Course,
                as: 'course',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            }
            ],
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        })    
        return res.status(200).json({success: true,message: 'all reocrds','records': data})
    }
    catch(error){
        return res.status(500).json({success: false, message: error?.message})
    }
}

self.create = async (req, res) => {
    if (!req.body.title || !req.body.course_id) {
        return res.status(400).send({success: false,message: "Content can not be empty"})
    }
    try{
        const newdata = {
            title: req.body.title,
            course_id: req.body.course_id
        }
        let data = await Syllabus.create(newdata)
        return res.status(200).json({success:true, message: "Data saved", data: data})
        
    }
    catch(error){
        return res.status(500).json({success:false, message: error?.message})
    }
}

self.getById = async (req,res) => {
    try{
        let id = req.params.id
        let data = await Syllabus.findByPk(id, {
            attributes: {
                exclude: ['createdAt','updatedAt']
            },
            include: [{
                model: Course,
                as: 'course',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
                }
            ]
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
        let data = await Syllabus.update(body, {
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
        let data = await Syllabus.destroy({
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