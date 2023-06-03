const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('TriBT is learning NodeJS')
})

app.listen(port, () => {
  console.log(`Example app listening on localhost port ${port}`)
})