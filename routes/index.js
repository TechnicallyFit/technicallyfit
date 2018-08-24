var express           = require("express"),
    router            = express.Router(),
    // fs                = require("fs"),
    TechnicallyFit    = require("../models/technicallyfit");

/* GET home page. */
router.get("/", function(req, res, next) {
  // res.render("index", { title: "Express" });
  res.render("technicallyfit/index");
});


router.post("/", function(req, res) {
  var earlyAdopter = { email: req.body.email.toLowerCase() };
  console.log("What I received: " + req.body.email);
  TechnicallyFit.find({}, function(err, all) {
    var isNewEmail = true;
    for(var i = 0; i < all.length; i++) {
      if (all[i].email == earlyAdopter.email) {
        isNewEmail = false;
        return res.redirect("/");
      }
    }
    if (isNewEmail) {
      TechnicallyFit.create(earlyAdopter, function(err, newAdopter) {
        if (err) {
          console.log(err);
        } else {
          newAdopter.save();
          // req.flash("newFollower", "We appreciate your time and look forward to sharing our product with you :)!")
          res.redirect("/");
        }
      });
    }
  });
});


module.exports = router;
