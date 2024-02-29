const express = require("express");
const router = express.Router();

const CompanyController = require("../controller/CompanyController");

router.post("/", CompanyController.post);
router.get("/", CompanyController.get);
router.get("/division", CompanyController.getDivision);
router.put("/", CompanyController.update);
router.delete("/", CompanyController.delete);

module.exports = router;
