const express = require('express')
const app = express()
const port = 3000

app.get('/blog1', (req, res) => {
    var a = 2;
    var b = 1;
    var c = a + b;
  return res.send('Hello World!' + c)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})