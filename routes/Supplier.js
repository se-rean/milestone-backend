const express = require("express");
const router = express.Router();

const SupplierController = require("../controller/SupplierController");

router.post("/", SupplierController.post);
router.get("/:id", SupplierController.getById);
router.get("/", SupplierController.get);
router.delete("/", SupplierController.delete);
router.put("/:id", SupplierController.put);

module.exports = router;
