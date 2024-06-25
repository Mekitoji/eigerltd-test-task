const express = require('express');
const TradesController = require('../controllers/trades');
const { methodNotAllowed } = require('../errors');
const { Trades } = require('../models/trades');
const router = express.Router();

const tradesController = new TradesController(Trades);

router.get('/', async (req, res) => tradesController.getAll(req, res))
      .get('/:id', async (req, res) => tradesController.getById(req, res))
      .post('/', async (req, res) => tradesController.create(req, res))
      .delete('/:id', methodNotAllowed)
      .put('/:id', methodNotAllowed)
      .patch('/:id', methodNotAllowed);

module.exports = router;
