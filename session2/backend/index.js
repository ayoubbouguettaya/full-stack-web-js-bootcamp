const express = require('express')
const cors = require('cors')

const app = express()

const port = 3000
const data = [{
    name: 'tv',
    price: 120000,
    quantity: 6,
    image: '/products/tv.jpeg',
    id: 1
},
{
    name: 'smartphone',
    price: 100000,
    quantity: 3,
    image: '/products/tv.jpeg',
    id: 3
},
{
    name: 'play station',
    price: 50000,
    quantity: 1,
    image: '/products/tv.jpeg',
    id: 2
}]

app.use(cors({
    origin: "*"
}))

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})