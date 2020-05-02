const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const start = require('../scraper/wikiScraper');


router.use(bodyParser.json());

router.post('/findLink', async (req, res) => {
    const link = req.body.link;

    function success(obj){
        res.json(obj);
    }

    function failure(obj){
        res.json(obj);
    }

    start(link, 0, [], success, failure);
})

module.exports = router;