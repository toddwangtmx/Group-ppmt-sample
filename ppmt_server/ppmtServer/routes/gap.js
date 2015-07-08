var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send({
    gap: [
      {
        gap: 'gap1',
        description: 'Description for gap1',
        weight: 0.1,
        kmo: 'kmo1'
      },
      {
        gap: 'gap2',
        description: 'Description for gap2',
        weight: 0.5,
        kmo: 'kmo1'
      },
      {
        gap: 'gap3',
        description: 'Description for gap3',
        weight: 0.2,
        kmo: 'kmo2'
      },
      {
        gap: 'gap4',
        description: 'Description for gap4',
        weight: 0.3,
        kmo: 'kmo2'
      },
      {
        gap: 'gap5',
        description: 'Description for gap5',
        weight: 0.5,
        kmo: 'kmo2'
      },
      {
        gap: 'gap6',
        description: 'Description for gap6',
        weight: 0.4,
        kmo: 'kmo1'
      }
    ]
  });
});

router.put('/:id', function(req, res, next) {
  if(!req.body.gap) {
    res.status(400).send({
      error: 'Missing gap'
    });
  }
  else {
    res.send({
      result: 'success'
    });
  }
});

module.exports = router;
