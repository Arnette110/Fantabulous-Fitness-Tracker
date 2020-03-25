const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is required"
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
