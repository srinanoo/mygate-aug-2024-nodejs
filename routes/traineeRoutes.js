const router = require('express').Router();

// const traineeController = require('../controllers/traineeControllers');
const traineeController = require('../controllers/traineeExpressController');
router.get("/readTrainees", traineeController.readTrainees);

router.get("/readSpecificTrainee", traineeController.readSpecificTrainee);

router.post("/createTrainee", traineeController.createTrainee);

router.put("/updateTrainee", traineeController.updateTrainee);

router.delete("/deleteTrainee/:id", traineeController.deleteTrainee);

module.exports = router;