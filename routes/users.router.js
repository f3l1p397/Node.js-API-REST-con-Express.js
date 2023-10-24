const express = require('express');
const UsersService = require('../services/user.service');
const router = express.Router();

const service = new UsersService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

module.exports = router;
