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
  let workouts = [
    {
      day: "Monday",
      category: "Pullertins",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Pullups", 4, 10, 30],
        ["Deadlift", 4, 10, 30],
        ["Dumbbell Shrugs", 5, 15, 30],
        ["Bent Over Barbell Row", 6, 12, 30],
        ["Seated Wide-Grip Cable Row", 5, 8, 30],
        ["Seated Close-Grip Lat Pulldown", 4, 10, 30],
        ["Straight Arm Pulldown", 3, 15, 30],
        ["Bent Over Dumbell Rear Delt Row", 5, 12, 30],
        ["Bicep Cable Curls", 5, 12, 30],
        ["Upright Cable Row", 5, 8, 30],
        ["Reverse Curls", 4, 10, 30],
        ["EZ Bar Curls", 5, 12, 30]
      ]
    },
    {
      day: "Tuesday",
      category: "Pushertins",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Barbell Flat Bench Press", 5, 12, 30],
        ["Barbell Incline Bench Press", 5, 12, 30],
        ["Chest Fly Machine", 5, 12, 30],
        ["Shoulder Lateral Raises", 5, 20, 30],
        ["Dumbbell Shoulder Press", 5, 12, 30],
        ["Tricep Extensions (Cable)", 5, 12, 30],
        ["Tricep Dip (Weighted)", 5, 20, 30],
        ["High-Medium-Low Cable Crossovers", 9, 10, 30],
        ["Push Ups", 5, 10, 30],
      ]
    },
    {
      day: "Wednesday",
      category: "Legertins & Core-tinos",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Leg Press Machine", 8, 10, 30],
        ["Calve Raises", 8, 10, 30],
        ["Dumbbell Front Squat", 8, 10, 30],
        ["Jump Lunges", 8, 10, 30],
        ["Barbell Squat", 5, 10, 30],
        ["Single Leg Weighted Lunges", 5, 8, 30],
        ["Leg Curls", 5, 8, 30],
        ["Leg Extensions", 5, 8, 30],
        ["Hip Adductors", 4, 15, 30],
        ["Hip Abductors", 4, 15, 30],
        ["Weighted Russian Twist", 5, 10, 30],
        ["Weighted Sit Ups", 5, 10, 30],
        ["Weighted Reverse Sit Ups", 5, 10, 30],
        ["Plank", 5, 45, 30]
      ]
    },
    {
      day: "Thursday",
      category: "Pullertins",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Pullups", 4, 10, 30],
        ["Deadlift", 4, 10, 30],
        ["Dumbbell Shrugs", 5, 15, 30],
        ["Bent Over Barbell Row", 6, 12, 30],
        ["Seated Wide-Grip Cable Row", 5, 8, 30],
        ["Seated Close-Grip Lat Pulldown", 4, 10, 30],
        ["Straight Arm Pulldown", 3, 15, 30],
        ["Bent Over Dumbell Rear Delt Row", 5, 12, 30],
        ["Bicep Cable Curls", 5, 12, 30],
        ["Upright Cable Row", 5, 8, 30],
        ["Reverse Curls", 4, 10, 30],
        ["EZ Bar Curls", 5, 12, 30]
      ]
    },
    {
      day: "Friday",
      category: "Pushertins",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Barbell Flat Bench Press", 5, 12, 30],
        ["Barbell Incline Bench Press", 5, 12, 30],
        ["Chest Fly Machine", 5, 12, 30],
        ["Shoulder Lateral Raises", 5, 20, 30],
        ["Dumbbell Shoulder Press", 5, 12, 30],
        ["Tricep Extensions (Cable)", 5, 12, 30],
        ["Tricep Dip (Weighted)", 5, 20, 30],
        ["High-Medium-Low Cable Crossovers", 9, 10, 30],
        ["Push Ups", 5, 10, 30],
      ]
    },
    {
      day: "Saturday",
      category: "Legertins & Core-tinos",
      exercise: [
        // Name, Sets, Reps, Rest
        ["Leg Press Machine", 8, 10, 30],
        ["Calve Raises", 8, 10, 30],
        ["Dumbbell Front Squat", 8, 10, 30],
        ["Jump Lunges", 8, 10, 30],
        ["Barbell Squat", 5, 10, 30],
        ["Single Leg Weighted Lunges", 5, 8, 30],
        ["Leg Curls", 5, 8, 30],
        ["Leg Extensions", 5, 8, 30],
        ["Hip Adductors", 4, 15, 30],
        ["Hip Abductors", 4, 15, 30],
        ["Weighted Russian Twist", 5, 10, 30],
        ["Weighted Sit Ups", 5, 10, 30],
        ["Weighted Reverse Sit Ups", 5, 10, 30],
        ["Plank", 5, 45, 30]
      ]
    },
    
  ];
  res.render("technicallyfit/workout", { workouts: workouts });
}); 


module.exports = router;
