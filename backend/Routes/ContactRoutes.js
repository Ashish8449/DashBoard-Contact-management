const express = require("express");
const {
  create,
  update,
  remove,
  getContacts,
} = require("../Controller/conatctController");
const { upload } = require("../Utils/uploadImage");

const router = express.Router();

router.post("/create", upload.single("photo"), create);
router.patch("/update/:id", upload.single("photo"), update);
router.delete("/delete/:id", remove);
router.get("/all", getContacts);

module.exports = router;
