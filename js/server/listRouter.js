let express = require('express');
let fs = require('fs');

let app = express();
let router = express.Router();


router.get('/', (req, res) => {
  res.send([]);
});

module.exports = router;
