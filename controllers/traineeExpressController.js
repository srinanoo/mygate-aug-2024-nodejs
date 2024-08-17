const traineeModel = require('../models/traineeModel');

const readTrainees = async (req, res) => {
    try {
        let resultData = await traineeModel.find();
        (resultData.length > 0)
            ?
                res.status(200).json({"data": resultData, "msg": "", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Trainee Found!", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
        
        res.status(500).json({"data": "", "msg": "", "err": "Unable to read Trainee Data!"});
    }
}

const readSpecificTrainee = async (req, res) => {
    try {
        let resultData = await traineeModel.find({"_id": req.query.id});
        (resultData.length > 0)
            ?
                res.status(200).json({"data": resultData, "msg": "", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Trainee Found!", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err});
        
        res.status(500).json({"data": "", "msg": "", "err": "Unable to read Trainee Data!"});
    }
}

const createTrainee = async (req, res) => {
    try {
        let data = req.body;
    
        const trainee = new traineeModel(data);
        await trainee.save();
       
        res.status(201).json({"data": "", "msg": "Trainee Created Successfully!", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
       
        res.status(500).json({"data": "", "msg": "", "err": "Unable to create Trainee Data!"});
    }
}

const updateTrainee = async (req, res) => {
    try {
        let data = req.body;

        let trainee = await traineeModel.updateOne({"_id": data.id}, {$set: data});
        (trainee.modifiedCount > 0)
            ?
                res.status(200).json({"data": "", "msg": "Trainee Updated Successfully!", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Trainee Found!", "err": ""});
    } catch (err) {
        res.status(500).json({"data": "", "msg": "", "err": "Unable to update trainee!"});
    }
}

const deleteTrainee = async (req, res) => {
    try {
        let trainee = await traineeModel.deleteOne({"_id": req.params.id});
        (trainee.deletedCount > 0)
            ?
                res.status(200).json({"data": "", "msg": "Trainee Deleted Successfully!", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Trainee Found!", "err": ""});
    } catch (err) {
        res.status(500).json({"data": "", "msg": "", "err": "Unable to delete trainee!"});
    }
}

module.exports = {
    readTrainees,
    readSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}