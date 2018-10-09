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

router.get("/workout", function(req, res) {
  var workout = {
      day: "Tuesday",
      category: "Armertins",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Cable Front Raise", 4, 20, 30],
        ["Dumbbell Rear Delt Row", 4, 20, 30],
        ["Dumbbell Lateral Raises", 3, 25, 30],
        ["Upright Cable Row", 4, 10, 30],
        ["Dumbbell Shoulder Press", 5, 12, 30],
        ["Tricep Pulldowns", 5, 12, 30],
        ["Bicep Cable Curls", 5, 12, 30],
        ["EZ Bar Skull Crushers", 4, 10, 30],
        ["Reverse Curls", 4, 10, 30],
        ["EZ Bar Curls", 5, 12, 30],
        ["Tricep Dip (Weighted)", 5, 20, 30],
        ["Preacher Curls", 5, 100, 30]
      ]
    };
  res.render("technicallyfit/workout", { workout: workout, name: "Darian" });
}); 


module.exports = router;
