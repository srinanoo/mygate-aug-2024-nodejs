const fs = require('fs');

function createTrainee() {
    try {
        let data = {
            "id": 2,
            "name": "Name 2",
            "phone": 1234567890,
            "email": "email2@example.com"
        }
    
        console.time();
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        traineesData = JSON.parse(traineesData);
        traineesData.push(data);
    
        fs.writeFileSync("./trainees.json", JSON.stringify(traineesData));
        console.log({"data": "", "msg": "Trainee Created Successfull!", "err": ""});
        console.timeEnd();
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
    }
}

function readTrainee(req, res) {
    try {
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        // console.log(JSON.parse(traineesData));
        // console.log({"data": traineesData, "msg": "", "err": ""});
        res.write(JSON.stringify({"data": traineesData, "msg": "", "err": ""}));
        res.end();
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
        res.write(JSON.stringify({"data": "", "msg": "", "err": "Unable to read Trainee Data!"}));
        res.end();
    }
}

function readSpecificTrainee() {
    try {
        let id = 2;
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        let resultData = JSON.parse(traineesData).filter(v => v.id === id);
        console.log({"data": resultData, "msg": "", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err});
    }
    
}

function updateTrainee() {
    try {
        let data = {
            "id": 3,
            "name": "Something...",
            "email": "something@example.com"
        }
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        traineesData = JSON.parse(traineesData);
        for(let i = 0; i < traineesData.length; i++) {
            if(traineesData[i].id === data.id) {
                traineesData[i] = { ...traineesData[i], age: 30, ...data };
                break;
            } 
        }
        fs.writeFileSync("./trainees.json", JSON.stringify(traineesData));
        console.log({"data": "", "msg": "Trainee Updated Successfully!", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
    }
    
}

function deleteTrainee() {
    try {
        let id = 2;
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        let resultData = JSON.parse(traineesData).filter(v => v.id !== id);
        fs.writeFileSync("./trainees.json", JSON.stringify(resultData));
        console.log({"data": "", "msg": "Trainee Deleted Successfully!", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
    }
}

module.exports = {
    createTrainee,
    readTrainee,
    readSpecificTrainee,
    updateTrainee,
    deleteTrainee
}