const express = require("express");
const router = express.Router();
const { addSleepData, getSleepData, getAllUserSleepData, updateSleepData, deleteSleepData } = require("../controllers/sleepController");
const { addMeal, getFoodLog, updateMeal, deleteMeal } = require("../controllers/foodLogController");

router.post("/:email/:foodDate", addMeal);
router.get("/:email/:foodDate", getFoodLog);
// router.get("/:email", getAllUserSleepData);
router.patch("/:email/:foodDate", updateMeal);
router.delete("/:email/:foodDate", deleteMeal);
module.exports = router;
