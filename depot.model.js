const mongoose = require("mongoose");

const depotSchema = new mongoose.Schema(
  {
    ID:{
      type: String,
      required: true,
    },

    MechanicHours: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Depot", depotSchema);