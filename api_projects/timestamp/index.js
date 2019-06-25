const express = require("express");
const app = express();

app.get('/api/timestamp/:date_string?', (req, res) => {
    let d;
    let date = req.params.date_string;
    if (!date) {
        d = new Date()
        res.status(400).send({
            "unix": d.getTime(),
            "utc": d.toUTCString()
        });
    }

    d = new Date(date);
    if (isNaN(d.getTime())) {
        res.status(400).send({
            "error": "Invalid Date"
        });
    } else {
        res.status(200).send({
            "unix:": d.getTime(),
            "UTC:": d.toUTCString()
        });
    }
});


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));