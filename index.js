const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Pipe open</h1>')
})

app.get('/sekret', (req, res) => {
  res.send({ what: 'cookie'})
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})