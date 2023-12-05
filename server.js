const express = require("express");
const dotenv = require("dotenv");
const {connectDB} = require("./database/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to the database
connectDB();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});