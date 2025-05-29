const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Sleep called. Duration: ' + req.query.ms + ' ms.');
    try{
        let ms = parseInt(req.query.ms) - (parseInt(req.query.offset) || 0);
        ms = (ms < 0)? 0 : ms;
        setTimeout(() => {
            res.sendStatus(200);
        }, ms);
    } catch (e) {
        res.sendStatus(400);
    }
});

app.get('/persist', (req, res) => {
    console.log('Persist Called');
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App started. Port: ${port}`);
  setInterval(() => {
    fetch('https://express-sleep-endpoint.onrender.com/persist');
  }, 890000);
});
