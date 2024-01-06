const express = require('express');
const { getHomepage } = require('../controllers/homeController');
const { getABC } = require('../controllers/homeController');
const router = express.Router();

//router.Method('router', handler)
router.get('/', getHomepage);

router.get('/abc', getABC);

module.exports = router;