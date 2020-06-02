let Nails = require('../models/nails_services').Nail_service;

// connect express to posts.js file (this file)
let express = require('express');

// this Router object will help redirect requests from one file to another
let router = express.Router();

// backend
router.get("/", async (req, resp) => {
    let nail = await Nails.find();
    resp.send(nail);
})

module.exports = router;