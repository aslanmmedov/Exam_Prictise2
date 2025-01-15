const express = require('express');
const router = express.Router();

const {
    GetAllData,
    GetDataById,
    AddData,
    DeleteDataById,
} = require("../controllers/shooseCont")

router.get("/",GetAllData);
router.get("/:id",GetDataById);
router.post("/",AddData);
router.delete("/:id",DeleteDataById);

module.exports = router;