// backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const animalRoutes = require("./routes/animals");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/animals", animalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
