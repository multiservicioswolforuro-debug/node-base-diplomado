import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.route.js";

const app = express();

// Middlewares
app.use(morgan('combined'));

// Routes
app.use('/api/users', usersRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;