const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json({ success: false, message: "Error signing up" });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => {
          res.json({ success: true, message: "Register successfully!" });
        })
        .catch((err) => {
          if (err.code === 11000) {
            return res.json({
              success: false,
              message: "Email already registered!",
            });
          } else {
            res.json({ success: false, message: "Invalid Route" });
          }
        });
    }
  });
});

router.post("/login", (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "User not found" });
      }
      const userResultArray = result[0];
      bcrypt.compare(
        req.body.password,
        userResultArray.password,
        (err, result) => {
          if (result) {
            const payload = {
              userId: userResultArray._id,
            };
            const token = jwt.sign(payload, "meanAcademy");
            return res.json({
              success: true,
              token: token,
              message: "Login successful",
            });
          } else {
            return res.json({
              success: false,
              message: "Password is incorrect",
            });
          }
        }
      );
    })
    .catch((err) => {
      res.json({ success: false, message: "Route failed" });
    });
});

router.get("/profile", (req, res) => {
  const userid = "62f5147cfcf3f33772d146f7";
  User.findById(userid)
    .exec()
    .then((result) => {
      res.json({ success: true, data: result })
      .catch(() => {
        res.json({ success: false, message: "Server Error" });
      });
    });
});

module.exports = router;
