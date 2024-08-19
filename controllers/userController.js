require('dotenv').config()
const models = require('../models')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = models.User

let self = {}

self.getAll = async (req,res)=> {
    try{
        let data = await User.findAll({
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


self.create = async (req,res) => {
    if (!req.body.first_name || !req.body.password) {
        return res.status(400).send({success: false,message: "Content can not be empty"})
    }
    try{
        const salt = await bcrypt.genSalt(10)
        
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password,salt)
        }
        let createdUser = await User.create(newUser)
        return res.status(200).json({success:true, message: "Data saved", data: createdUser})
        
    }
    catch(error){
        return res.status(500).json({success:false, message: error?.message})
    }
}


self.login = async (req, res) => {
    const requestedEmail = req.body.email
    const requestedPassword = req.body.password
    const user = await User.findOne({where: {email: requestedEmail}})
    if(user){
        const passwordValid = await bcrypt.compare(requestedPassword,user.password)
        if(passwordValid) {
            const token = jwt.sign({"id": user.id,"email": user.email,"first_name": user.first_name},process.env.SECRET_KEY)
            res.status(200).json({token: token})
        }
        else{
            res.status(400).json({error: "Password incorrect"})
        }
    }
    else{
        res.status(404).json({ error : "User does not exist" });
    }
}


module.exports = self