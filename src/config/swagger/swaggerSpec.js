import path from "path";
export const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QR Project Swagger",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
    },
  ],
  apis: [`${path.join(__dirname, "../../routes/*.js")}`],
};
