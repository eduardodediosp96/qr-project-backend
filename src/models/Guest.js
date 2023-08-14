import { mongoose } from "mongoose";

const Schema = mongoose.Schema;
var guestsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  bussinesTable: {
    type: String,
    required: true,
  },

  availableSchedules: {
    type: [{ type: Schema.Types.ObjectId, ref: "EventSchedule" }],
    default: [],
  },
});

export default mongoose.model("guests", guestsSchema);
