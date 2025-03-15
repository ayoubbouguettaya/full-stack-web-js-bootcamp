const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const dbInstance = require("./db");

const app = express();

const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

// parse application/json
app.use(bodyParser.json())

app.get("/products", async (req, res) => {
  const result = await dbInstance.query("SELECT * from public.products");

  console.log("Number of products", result.rowCount);

  const products = result.rows;

  res.send(products);
});

app.post('/products',async (req,res) => {

   const insertQuery = `INSERT INTO public.products(
	name, price, quantity, image)
	VALUES ($1, $2, $3, $4);`

  const name= req.body.name;
  const price= 323;
  const quantity= req.body.quantity;
  const image= '';

  console.log(name,price,quantity,image)
  
  await dbInstance.query(insertQuery,[name,price,quantity,image])

  res.send({status: 'ok'})
})

app.get("/", async (req, res) => {
  const result = await dbInstance.query("SELECT * from public.products");

  console.log("Number of products", result.rowCount);

  const products = result.rows;

  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
