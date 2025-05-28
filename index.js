const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let ms = req.query.ms;
    setTimeout(() => {
        res.sendStatus(200);
    }, ms);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
