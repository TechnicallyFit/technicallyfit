var mongoose = require("mongoose");

var technicallyFitSchema = new mongoose.Schema({
  email: String
});

var TechnicallyFit = mongoose.model("EarlyAdopter", technicallyFitSchema);

module.exports = TechnicallyFit;
