var express = require('express');
var router = express.Router();

router.get("form/", (res, req) => {
    res.render("form");
});

module.exports = router;