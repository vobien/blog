const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:newId', newsController.detail);
router.get('/', newsController.index);

module.exports = router;
