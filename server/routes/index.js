const express = require('express');
const router = express.Router();
const { Phone } = require('../db/models/Phone');
const { Accessory } = require('../db/models/Accessory');

router.get('/phones', async (req, res, next) => {
  try {
    const phones = await Phone.findAll();
    res.send(phones);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
