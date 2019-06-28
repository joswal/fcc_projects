const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');

const router = express.Router()

//url schema and model
const urlSchema = new mongoose.Schema({
    id: Number,
    name: String
})

const URL = mongoose.model("url", urlSchema);

//validate url
function validateUrl(url) {
    const REPLACE_REGEX = /^https?:\/\//i
    let result = url.replace(REPLACE_REGEX, '');
    let output = dns.lookup(result, (err, address, family) => {
        if (err == null) {
            console.log('No Errors: ' + address + ' - ' + family);
            return true
        } else {
            console.log('Errors: ' + err + ' -- ' + address + ' -- ' + family)
            return false
        }
    })
    return output
}

// API endpoints... 

//post new url
router.post("/new", async function (req, res) {
    try {
        valid = validateUrl(req.body.name);
        console.log(valid);
        if (!valid) return res.status(400).json({
            "error": "invalid URL"
        });
        let found = await URL.findOne({
            name: req.body.name
        })
        if (found) return res.status(400).send(`URL exists already and its new url is ${found.id}`);
        let count = await URL.countDocuments();
        count++;
        let url = new URL({
            id: count,
            name: req.body.name
        })
        await url.save();
        res.status(200).json({
            original_url: url.name,
            new_url: url.id
        });
    } catch (ex) {
        res.status(504).send("something failed, couldnt save url");
    }
});

//get new url
router.get("/:id", async (req, res) => {
    try {
        let url = await URL.findOne({
            id: req.params.id
        })
        if (!url) return res.status(400).send("url doesnt exist in our database");
        res.status(200).redirect(url.name);
    } catch (ex) {
        res.status(504).send("something failed, couldnt get shorturl and redirect");
    }
})

module.exports = router;