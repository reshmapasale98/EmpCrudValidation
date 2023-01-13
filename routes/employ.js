
var express = require("express");
var router = express.Router();
const { body,check } = require("express-validator");
const employController = require("../controllers/employ.controllers");
router.get("/getAllEmployee",employController.getAllEmployee);
router.post(
  "/create",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 5, max: 145 }),  
    body("email").notEmpty()
    .withMessage("Email is required").isEmail().withMessage("Please enter valid email address"),
    body('password').isLength({ min: 5 }),
    body('mobile').isLength({ min: 10,max:12 }).withMessage('please enter valid mobile number').isNumeric().withMessage("Please enter mobile in numbers only")
  ],
  employController.createEmploy
);

module.exports = router;
