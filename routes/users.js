const express = require("express");
const employController = require("../controllers/employ.controllers");
const router = express.Router();
router.post("/update/:id",employController.updateEmploy);
router.post("/delete/:id",employController.deleteEmploy);
module.exports = router;
