const express = require("express");

const { update, updatePassword } = require("../Controller/userController");

const router = express.Router();



router.get("/me", (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});
router.patch("/update", update);
router.patch("/updatePassword", updatePassword);

module.exports = router;
