const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const port = 4000
const products = require("./products.json")

app.get('/', (req, res) => {
  res.json(products.items)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})