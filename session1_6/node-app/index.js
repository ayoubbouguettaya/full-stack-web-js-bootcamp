const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const db = require('./db')

// parse application/json   // Midleware
app.use(bodyParser.json())
app.use(cors())


// user 
app.get('/',async (req,res) => {

    console.log('GET all product start')
    const result = await db.query('select * from public.product')

    console.log(result.rows,result.rowCount)
    console.log('GET all product end')

    res.send(result.rows)
})


// admin
app.post('/',async (req,res) => {

  
  const quantity = req.body.quantity;
  const name = req.body.name;
  const price = req.body.price;

  console.log('#####   INSERT NEW PRODUCT = ',name,price,quantity)
  
  //  Select all product 
  // if productName exist in all product


    await db.query(`INSERT INTO public.product(
	name, price, quantity, image)
	VALUES ($1,$2, $3, $4)`,[name,price,quantity,''])

    res.send({status: 'ok'})
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
