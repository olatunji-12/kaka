// backend/routes/animals.js
const express = require("express");
const router = express.Router();
const { poolPromise, sql } = require("../db");

router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Animals");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { name, species, breed, age, description, image_url } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input("name", sql.NVarChar, name)
      .input("species", sql.NVarChar, species)
      .input("breed", sql.NVarChar, breed)
      .input("age", sql.Int, age)
      .input("description", sql.NVarChar, description)
      .input("image_url", sql.NVarChar, image_url)
      .query(`
        INSERT INTO Animals (name, species, breed, age, description, image_url)
        VALUES (@name, @species, @breed, @age, @description, @image_url)
      `);
    res.status(201).json({ message: "Animal added" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
