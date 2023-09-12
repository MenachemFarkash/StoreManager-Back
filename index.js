const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const pool = new Pool({
    user: "postgres", // Your database username
    password: "Post1233", // Your database password
    host: "localhost", // Your database host
    port: 5433, // Your database port (default is 5432)
    database: "Store Manager", // Your database name
});

app.get("/get-users", (req, res) => {
    pool.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            res.status(500).send("Database error");
            return;
        }
        res.json(results.rows);
    });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
