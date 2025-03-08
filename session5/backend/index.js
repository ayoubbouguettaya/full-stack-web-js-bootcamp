const express = require("express");
const cors = require("cors");

const dbInstance = require("./db");

const app = express();

const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/products", async (req, res) => {
  const result = await dbInstance.query("SELECT * from public.products");

  console.log("Number of products", result.rowCount);

  const products = result.rows;
  
  res.send(products);
});

app.get("/", async (req, res) => {
  const result = await dbInstance.query("SELECT * from public.products");

  console.log("Number of products", result.rowCount);

  const products = result.rows;
  
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
