import app from "./app";
import { mongoose } from "mongoose";

const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

app.listen(PORT, () => {
  console.log(`connection stablished in port ${PORT}`);
  mongoose.connect(CONNECTION_STRING);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});
