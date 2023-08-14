const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventScheduleSchema = new mongoose.Schema({
  date: Date,
  time: String,
  event: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "event",
  },
});

const EventSchedule = mongoose.model("EventSchedule", eventScheduleSchema);

module.exports = EventSchedule;
