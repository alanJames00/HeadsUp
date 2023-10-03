const express = require('express');
const router = express.Router();


router.get('/whoami', (req, res)=>{
    
    // Get the request headers


    
    const ipaddrs = req.headers.host;
    const lang = req.headers['accept-language'];
    const sw = req.headers['user-agent'];


    res.json({
        "ipaddress" : ipaddrs,
        "language":lang,
        "software":sw
    })
})

module.exports = router;
