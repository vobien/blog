const { toObjects } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    async getCourses(req, res) {
        const courses = await Course.find({});
        res.render('me/courses', {
            courses: toObjects(courses),
        });
    }

    // [GET] /me/stored/news
    getNews(req, res) {
        res.render('me/news');
    }

    // [GET] /me
    getProfile(req, res) {
        res.render('me');
    }
}

module.exports = new MeController();
