const express = require('express')
const router = express.Router()
const QuestionType = require('./models')
const StudentDetails = require('./models/studentdetails')

router.get('/studentDetails',async (request,response) => {
    const data = await StudentDetails.findAll()
    response.status(200).json(data)
})



router.get('/questionTypes',async (request,response) => {
    const questionTypes = await QuestionType.findAll()
    response.status(200).json(questionTypes)
})

router.post('/questionTypes', async(request,response) => {
    const {type_name,short_form} = request.body
    const questionTypes = QuestionType.build({
        'type_name': type_name,
        'short_form': short_form
    })

    try{
        await questionTypes.save()
        response.status(201).json(questionTypes)
    }
    catch(error) {
        response.json(error)
    }
})


router.get('/questionTypes/:id',async (request,response) => {
    const record = await QuestionType.findOne({
        where: {
            id: request.params.id
        }
    })
    response.status(200).json(record)
})

router.patch('/questionTypes/:id',async (request,response) => {
    const record = await QuestionType.findOne({
        where: {
            id: request.params.id
        }
    })
    const {type_name,short_form} = request.body
    await record.set({
        type_name: type_name,
        short_form: short_form
    })
    await record.save()
    response.status(200).json(record)
})

router.delete('/questionTypes/:id', async (request,response) => {
    const record = await QuestionType.findOne({
        where: {
            id: request.params.id
        }
    })
    await record.destroy()
    response.status(200).json({message: "Deleted successfully"})
})

module.exports = router