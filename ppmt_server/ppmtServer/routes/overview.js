var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send({
    planName: 'Avastine',
    budgetYear: '2016',
    planDescription: 'This medical plan is under evaluation. Please wait for further instruction.',
    lastModified: '05/22/2015'
  });
});

router.put('/:id', function(req, res, next) {
  if(!req.body.planDescription) {
    res.status(400).send({
      error: 'Missing plan description'
    });
  }
  else {
    res.send({
      status: 'success'
    });
  }
});

module.exports = router;
