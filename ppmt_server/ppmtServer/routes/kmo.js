var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send({
    keyMedicalObject: [
      {
        weight: 0.2,
        description: 'Description for kmo1',
        kmoName: 'kmo1'
      },
      {
        weight: 0.3,
        description: 'Description for kmo2',
        kmoName: 'kmo2'
      },
      {
        weight: 0.1,
        description: 'Description for kmo3',
        kmoName: 'kmo3'
      },
      {
        weight: 0.4,
        description: 'Description for kmo4',
        kmoName: 'kmo4'
      }
    ]
  });
});

router.put('/:id', function(req, res, next) {
  if(!req.body.keyMedicalObject) {
    res.status(400).send({
      error: 'Missing keyMedicalObject'
    });
  }
  else {
    res.send({
      result: 'success'
    });
  }
});

module.exports = router;
