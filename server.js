// // const trainees = require('./traineeModule');
// // trainees.createTrainee();

const { createTrainee, readTrainee } = require('./traineeModule');
// readTrainee();

const http = require('http');
http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    switch(req.url) {
        case "/readTrainee":
            readTrainee(req, res);
            break;
        case "/readSpecificTrainee":
            break;
        case "/createTrainee":
            break;
        default:
            res.write("No Routes Found!");
            res.end();
            break;
    }
}).listen(4000, () => console.log("Server is running in port: 4000"));