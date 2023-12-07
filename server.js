const express = require("express");
const dotenv = require("dotenv");
const {connectDB} = require("./database/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to the database
connectDB();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Swagger middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});