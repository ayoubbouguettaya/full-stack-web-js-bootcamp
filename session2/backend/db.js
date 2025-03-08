const { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "main",
});

client.connect().then(() => {
    console.log("Database connected successfully!");
})
.catch((err) => {
    console.error("Database connection error:", err);
});

module.exports = client;
