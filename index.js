const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try{
        let ms = parseInt(req.query.ms) - 300;
        ms = (ms < 0)? 0 : ms;
        setTimeout(() => {
            res.sendStatus(200);
        }, ms);
    } catch (e) {
        res.sendStatus(400);
    }
});

app.get('/persist', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App started. Port: ${port}`);
  setInterval(() => {
    fetch('https://express-sleep-endpoint.onrender.com/persist');
  }, 60000);
});
