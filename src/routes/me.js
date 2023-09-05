const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.getCourses);
router.get('/trash/courses', meController.getDeletedCourses);
router.get('/stored/news', meController.getNews);
router.get('/', meController.getProfile);

module.exports = router;
