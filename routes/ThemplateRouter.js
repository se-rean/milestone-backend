const express = require("express");
const router = express.Router();

const ThemplateController = require("../controller/ThemplateController");

router.post("/", ThemplateController.post);
router.get("/", ThemplateController.get);
router.delete("/", ThemplateController.delete);
router.put("/", ThemplateController.update);

module.exports = router;
