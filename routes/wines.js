const express = require('express');
const router = express.Router();
const { getAllWines, getWineById } = require('../controllers/wines');

// Routes
router.get('/wines', getAllWines);
router.get('/wines/:id', getWineById);

module.exports = router;
