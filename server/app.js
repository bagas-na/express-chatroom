const express = require('express')
const app = express()
const port = 3000

// Untuk static file yang ada pada folder public (termasuk front-end)
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
