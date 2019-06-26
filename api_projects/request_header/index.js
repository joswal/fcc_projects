const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
    let ip = req.connection.remoteAddress || req.socket.remoteAddress || req.ip.split(":")[3];;
    let language = req.headers["accept-language"];
    let software = req.headers["user-agent"];
    res.send({
        "ip address": ip,
        "language": language,
        "software": software
    });
})

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));