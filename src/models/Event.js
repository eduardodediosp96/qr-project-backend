import { mongoose } from "mongoose";
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  schedules: [{ type: Schema.Types.ObjectId, ref: "EventSchedule" }],
  guests: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Guest",
    },
  ],
  concluded: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Event", eventSchema);
