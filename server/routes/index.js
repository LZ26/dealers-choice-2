const express = require('express');
const router = express.Router();
const { Phone } = require('../db/models/Phone');
// const { Accessory } = require('../db/models/Accessory');

router.get('/phones', async (req, res, next) => {
  try {
    const phones = await Phone.findAll();
    res.send(phones);
  } catch (err) {
    next(err);
  }
});

router.post('/phones/create', async (req, res, next) => {
  try {
    res.status(201).send(await Phone.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.get('/phones/:id', async (req, res, next) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    res.send(phone);
  } catch (err) {
    next(err);
  }
});

router.put('/phones/:id', async (req, res, next) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    await phone.update(req.body);
    res.send(phone);
  } catch (err) {
    next(err);
  }
});

router.delete('/phones/:id', async (req, res, next) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    await phone.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
