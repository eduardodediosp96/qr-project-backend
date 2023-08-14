import * as dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";
//swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerSpec } from "./config/swagger/swaggerSpec";
import routes from "./routes";

const app = express();
dotenv.config();
//middlewares
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/", routes);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsDoc(swaggerSpec))
);
// app.use(clientErrorHandler);
// app.use(errorHandler);

export default app;
