// const fs = require('fs');

// const traineeFile = "./trainees.json";

// const readTrainees = (req, res) => {
//     try {
//         let traineesData = fs.readFileSync(traineeFile, "utf8");
        
//         res.status(200).json({"data": JSON.parse(traineesData), "msg": "", "err": ""});
//     } catch (err) {
//         console.log({"data": "", "msg": "", "err": err.message});
        
//         res.status(500).json({"data": "", "msg": "", "err": "Unable to read Trainee Data!"});
//     }
// }

// const readSpecificTrainee = (req, res) => {
//     try {
//         let id = parseInt(req.query.id);
//         let traineesData = fs.readFileSync(traineeFile, "utf8");
//         let resultData = JSON.parse(traineesData).filter(v => v.id === id);
        
//         res.status(200).json({"data": resultData, "msg": "", "err": ""});
//     } catch (err) {
//         console.log({"data": "", "msg": "", "err": err});
        
//         res.status(500).json({"data": "", "msg": "", "err": "Unable to read Trainee Data!"});
//     }
// }

// const createTrainee = (req, res) => {
//     try {
//         let data = req.body;
    
//         let traineesData = fs.readFileSync(traineeFile, "utf8");
//         traineesData = JSON.parse(traineesData);
//         traineesData.push(data);
    
//         fs.writeFileSync("./trainees.json", JSON.stringify(traineesData));
       
//         res.status(201).json({"data": "", "msg": "Trainee Created Successfully!", "err": ""});
//     } catch (err) {
//         console.log({"data": "", "msg": "", "err": err.message});
       
//         res.status(500).json({"data": "", "msg": "", "err": "Unable to create Trainee Data!"});
//     }
// }

// const updateTrainee = (req, res) => {
//     try {
//         let data = req.body;

//         let traineesData = fs.readFileSync("./trainees.json", "utf8");
//         traineesData = JSON.parse(traineesData);
//         for(let i = 0; i < traineesData.length; i++) {
//             if(traineesData[i].id === data.id) {
//                 traineesData[i] = { ...traineesData[i], age: 30, ...data };
//                 break;
//             } 
//         }
//         fs.writeFileSync("./trainees.json", JSON.stringify(traineesData));
       
//         res.status(200).json({"data": "", "msg": "Trainee Updated Successfully!", "err": ""});
//     } catch (err) {
//         res.status(500).json({"data": "", "msg": "", "err": "Unable to update trainee!"});
//     }
// }

// const deleteTrainee = (req, res) => {
//     try {
//         let id = req.params.id;
    
//         let traineesData = fs.readFileSync("./trainees.json", "utf8");
//         let resultData = JSON.parse(traineesData).filter(v => v.id !== id);
//         fs.writeFileSync("./trainees.json", JSON.stringify(resultData));
        
//         res.status(200).json({"data": "", "msg": "Trainee Deleted Successfully!", "err": ""});
//     } catch (err) {
//         res.status(500).json({"data": "", "msg": "", "err": "Unable to delete trainee!"});
//     }
// }

// module.exports = {
//     readTrainees,
//     readSpecificTrainee,
//     createTrainee,
//     updateTrainee,
//     deleteTrainee
// }