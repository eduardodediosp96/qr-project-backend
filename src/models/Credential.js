import { mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const Schema = mongoose.Schema;
const credentialsSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

credentialsSchema.plugin(uniqueValidator);
export default mongoose.model("credentials", credentialsSchema);
