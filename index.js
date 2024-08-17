// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem());

const fs = require('fs');
// Sync
// console.log("Before...")
// fs.writeFileSync("sample.txt", "First File");
// console.log("File created!");
// console.log("After...")

// console.log("Before...");
// let data = fs.readFileSync("sample.txt",  "utf8");
// console.log(data);
// console.log("After...");

// console.log("Before...");
// fs.unlinkSync("sample.txt");
// console.log("File Deleted!");
// console.log("After...");

// Async
// console.log("Before...");
// fs.writeFile("sample1.txt", "MODIFIED File", (err)=>{
//     if(err) console.log(err);
//     else
//         console.log("File created!");
// });
// console.log("After...");

// console.log("Before...");
// fs.readFile("sample.txt",  "utf8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });
// console.log("After...");

// console.log("Before...");
// fs.unlink("sample1.txt", (err) => {
//     if (err) console.log(err.message);
//     else
//         console.log("File Deleted!");
// });
// console.log("After...");

// let age = [25, 30, 18, 10, 22, 40, 46, 50];
// for(let i = 0; i < age.length; i++) {
//     if(age[i] === 18) {
//         console.log("Age: " + age[i]);
//         break;
//     }
//     console.log(i);
// }

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
// createTrainee();

function readTrainee() {
    try {
        let traineesData = fs.readFileSync("./trainees.json", "utf8");
        // console.log(JSON.parse(traineesData));
        console.log({"data": traineesData, "msg": "", "err": ""});
    } catch (err) {
        console.log({"data": "", "msg": "", "err": err.message});
    }
}
// readTrainee();

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
// readSpecificTrainee();

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
// updateTrainee();

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
// deleteTrainee();

// let a = [1, 2, 3];
// let b = [4, 5, 6, 1, 2, 3];
// let c = [...a, ...b];
// console.log(c);

// let a = {
//     "name": "John",
//     "age": 30,
// }
// let b = {
//     "phone": 1234567890,
//     "name": "New Name",
// }

// let c = { ...b, ...a };
// console.log(c);