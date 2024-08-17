const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const conn = require('./services/db');
conn.dbConnection();

const traineeRoutes = require('./routes/traineeRoutes');
app.use("/api/v1/trainees", traineeRoutes)

app.use("/*", (req, res) => {
    res.send("No Route Match Found!");
})

app.listen(4000, () => console.log("Server is listening on port: 4000"));